import * as THREE from 'three';
import { PCDLoader } from 'three/addons/loaders/PCDLoader.js';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';

import {displayLoader, removeLoader} from './html.js'
import {getDefaultAudioContext} from "./audio.js";


document.querySelector('html').style.height = '100%';
document.querySelector('html').style.width = '100%';
const htmlBody = document.querySelector('body');
htmlBody.style.margin = '0px';
htmlBody.style.height = '100%';
htmlBody.style.width = '100%';



const ROOT_URL_PREFIX = 'https://anasynth.demos.ircam.fr/musem'
const SPRITE_URL = ROOT_URL_PREFIX + '/assets/point.png'



let handler = (function() {

    let _h = {}

    _h.modalities = ['instrumental', 'mood', 'genre', 'versions']
    _h.modality = _h.modalities[0]

    _h.displayElement = htmlBody;

    _h.sprite = null

    _h.context = null
    _h.source = null

    _h.wait = function(msg) {
        displayLoader(_h.displayElement, msg);
    }

    _h.display = function(html) {
        _h.displayElement.innerHTML = html;
    }


    _h.init = () => {
        return _h.load_sprite()
            .then(_h.load_modality)
            .then(_h.show)
    }

    _h.load_sprite = function() {
        const url = SPRITE_URL
        return new Promise(
            (resolve, reject) => {
                const loader = new THREE.TextureLoader()
                loader.load(
                    // resource URL
                    url, //'/static/assets/test.pcd',
                    // called when the resource is loaded
                    sprite => {
                        _h.sprite = sprite
                        resolve()
                    },
                    // called when loading is in progresses
                    xhr => console.log('sprite '+ (xhr.loaded / xhr.total * 100) + '% loaded'),
                    // called when loading has errors
                    error => reject(error)
                )
            }
        )
    }

    _h.load_points = function(url) {
        console.log(url)
        // load the points
        return new Promise(
            (resolve, reject) => {
                const loader = new PCDLoader()
                loader.load(
                    // resource URL
                    url, //'/static/assets/test.pcd',
                    // called when the resource is loaded
                    points => resolve(points),
                    // called when loading is in progresses
                    xhr => console.log('points ' + (xhr.loaded / xhr.total * 100) + '% loaded'),
                    // called when loading has errors
                    error => reject(error)
                )
            }
        )
    }



    _h.load_samples = function(url) {
        return new Promise(
            (resolve, reject) => {
                fetch(url,
                    {
                        headers: {
                            'Accept': 'application/json',
                        },
                        method: "GET",
                    })
                    .then(response => response.json())
                    .then(response => {
                        let res = []
                        for (const [i, r] of Object.entries(response)) {
                            res.push(r)
                        }
                        resolve(res)
                    })
                    .catch(error => reject(error))
            }
        )
    }



    _h.load_modality = () => {

        let point_url, sample_url
        if (_h.modality === 'versions') {
            point_url = ROOT_URL_PREFIX + '/ivi/assets/ivi_shs5_pretrained_hamely_v2_C1_1epoch.embeddings_umap.pcd'
            sample_url = ROOT_URL_PREFIX + '/ivi/assets/samples.json'
        } else {
            point_url = ROOT_URL_PREFIX + '/mep/'+ _h.modality + '/mep_' + _h.modality + '_umap.pcd'
            sample_url = ROOT_URL_PREFIX + '/mep/'+ _h.modality + '/mep_' + _h.modality + '_umap.json'
        }

        _h.wait('Loading...')
        return Promise.all([
                _h.load_points(point_url),
                _h.load_samples(sample_url)])

    }

    _h.show = values => {
        removeLoader()
        let points, samples
        [points, samples] = values

        /*let geometry = points.geometry
        const sizes = new Float32Array(Array(geometry.getAttribute('color').count).fill(0.02))
        geometry.setAttribute('size', new THREE.Float32BufferAttribute( sizes, 1 ))
        geometry.attributes.size.needsUpdate = true*/
        let material = points.material
        material.map = _h.sprite
        material.size = 0.02
        material.alphaTest = 0.5
        material.transparent = true

        //const renderer = _h.renderer
        //const canvas = renderer.domElement;

        const canvas = document.querySelector('#c');

        // renderer
        const renderer = new THREE.WebGLRenderer({antialias: true, canvas});

        let renderRequested = false;

        function resizeRendererToDisplaySize(renderer) {
            const canvas = renderer.domElement;
            const width = canvas.clientWidth;
            const height = canvas.clientHeight;
            const needResize = canvas.width !== width || canvas.height !== height;
            if (needResize) {
                renderer.setSize(width, height, false);
            }
            return needResize;
        }


        // camera
        const fov = 60 // field of view
        const aspect = window.innerWidth / window.innerHeight //2;  // the canvas default
        const near = .1
        const far = 5
        const camera = new THREE.PerspectiveCamera(fov, aspect, near, far )
        //const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
        camera.position.set( 0, 0, 2.5 )
        camera.lookAt( 0, 0, 0 )

        // controls
        const controls = new OrbitControls(camera, canvas);
        controls.target.set(0, 0, 0);
        controls.update();
        controls.addEventListener('change', requestRenderIfNotRequested);
        window.addEventListener('resize', requestRenderIfNotRequested);
        function controlsEnabled(state){
            controls.enableZoom = state;
            controls.enableRotate = state;
            controls.enablePan = state;
        }

        // scene
        const scene = new THREE.Scene();
        scene.add(points)

        // gui
        // this is hackish, but we have to remove the previous gui otherwise it will attach several of them which
        // confuses everything. Problem is then that the mouse might be outside the new gui, and the mouseleave event
        // is never triggered.
        $('.lil-gui').remove()
        const gui = new GUI('modalities');
        $( gui.domElement ).mouseenter(event => {
            _h.raycasting = false;
        } );
        $( gui.domElement ).mouseleave(function() {
            _h.raycasting = true;
        } );
        let params = {modality: _h.modality}
        gui.add(params, 'modality', _h.modalities).onChange( function () {
            _h.modality = params.modality
            _h.load_modality().then(_h.show)
        } );
        //}




        // raycaster
        const raycaster = new THREE.Raycaster();
        raycaster.params.Points.threshold = .002;
        const mouse = new THREE.Vector2();
        let currentIndex = null
        let currentColor = null
        let intersects = null;

        function getMousePointIndex() {
            intersects = raycaster.intersectObject(points);
            if (intersects.length === 0) {
                currentIndex = null;
                return;
            }
            // if we are on a point, disable controls
            controlsEnabled(false);
            currentIndex = intersects[0].index;
        }

        function updateMouseAndRaycaster(event) {
            // calculate pointer position in normalized device coordinates
            // (-1 to +1) for both components
            mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
            mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
            // update the picking ray with the camera and pointer position
            raycaster.setFromCamera(mouse, camera);
        }



        let animating = true
        let animateTimeoutId = null

        function startAnimation() {
            animating = true
            animateTimeoutId = null
            requestRenderIfNotRequested()
        }

        function maybeStopAnimation() {
            if (animating === true) {
                animating = false
                //requestRenderIfNotRequested()
            }
        }

        function maybeUnscheduleAnimation() {
            if (animateTimeoutId !== null) {
                clearTimeout(animateTimeoutId)
            }
        }

        function scheduleAnimation(ms) {
            maybeUnscheduleAnimation()
            animateTimeoutId = setTimeout(startAnimation, ms)
        }

        function mouseDown(event) {
            if (_h.raycasting === false) {
                return
            }

            // stop animation if needed
            maybeUnscheduleAnimation()
            maybeStopAnimation()

            // check if our pointer intersects with a point
            updateMouseAndRaycaster(event);
            getMousePointIndex();
            if (currentIndex === null) {
                //_h.stop(); // in case
                return;
            }



            // change intersected point
            const attributes = points.geometry.attributes;
            let r, g, b;
            r = attributes.color.array[ currentIndex*3 ]
            g = attributes.color.array[ currentIndex*3 + 1 ]
            b = attributes.color.array[ currentIndex*3 + 2 ]
            currentColor = [r, g, b] //.slice() // copy

            const color = [168/255, 50/255, 92/255]

            attributes.color.array[ currentIndex*3 ] = color[0]
            attributes.color.array[ currentIndex*3 + 1 ] = color[1]
            attributes.color.array[ currentIndex*3 + 2 ] = color[2]
			attributes.color.needsUpdate = true;

            // render
            requestRenderIfNotRequested()

        }

        function mouseUp(event) {
            if (_h.raycasting === false) {
                return
            }

            if (currentIndex === null) {
                scheduleAnimation(3000)
                return;
            }

            // change color back
            const attributes = points.geometry.attributes;
            attributes.color.array[ currentIndex*3 ] = currentColor[0]
            attributes.color.array[ currentIndex*3 + 1 ] = currentColor[1]
            attributes.color.array[ currentIndex*3 + 2 ] = currentColor[2]
            attributes.color.needsUpdate = true;

            requestRenderIfNotRequested()

            // play
            const sample = samples[currentIndex]
            let url
            if (_h.modality === 'versions') {
                url = ROOT_URL_PREFIX + '/ivi/audio/' + sample.class_label + '/' + sample.label + '.mp3'
            } else {
                url = ROOT_URL_PREFIX + '/mep/audio/' + sample.uri
            }
            console.log(url)
            _h.stop()
            _h.play(url)

            // back to normal state
            currentIndex = null;
            controlsEnabled(true);

            // trigger a timeout
            scheduleAnimation(3000)
        }

        window.addEventListener("mousedown", mouseDown, false);
        window.addEventListener("mouseup", mouseUp, false);


        let last_time = 0.
        const speed = 0.1
        // a timeout to check if no action has taken place

        function requestRenderIfNotRequested() {
            if (!renderRequested) {
                renderRequested = true;
                requestAnimationFrame(render);
            }
        }

        function render(time) {

            // resize stuff if needed
            renderRequested = false;
            if (resizeRendererToDisplaySize(renderer)) {
                const canvas = renderer.domElement;
                camera.aspect = canvas.clientWidth / canvas.clientHeight;
                camera.updateProjectionMatrix();
            }
            if (animating === true) {
                time *= 0.001
                if (time-last_time < speed) {
                    requestAnimationFrame(render)
                    return
                }

                last_time = time

                points.rotation.x += 0.001
                points.rotation.y += 0.001
                points.rotation.z += 0.001

                renderer.render( scene, camera );
                requestAnimationFrame(render)
            } else {
                renderer.render( scene, camera );
                last_time = 0
            }
        }

        // go
        //render(0.0)
        requestAnimationFrame(render)
    }

    _h.play = function(url) {

        // get context if not already there
        if (_h.context == null) {
            _h.context = getDefaultAudioContext();
        }
        function _playback(audio) {

            if (_h.source == null) {
                _h.source = _h.context.createBufferSource();
            }
            _h.source.buffer = audio;
            _h.source.connect(_h.context.destination);
            _h.source.loop = false;
            _h.source.start()
        }

        fetch(url)
            .then(response => response.arrayBuffer())
            .then(buf => _h.context.decodeAudioData(buf))
            .then(_playback)
    }

    _h.stop = function() {
        if (_h.source) {
            _h.source.stop()
        }
        _h.source = null // release as a buffer can be used only once
    }


    return _h;
})();


handler.init()
    .catch(error => {
        console.log(error)
        handler.display(error); //getErrorHtml(error);
    });
