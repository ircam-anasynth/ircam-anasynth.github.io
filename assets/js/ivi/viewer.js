import * as THREE from 'three';
import { PCDLoader } from 'three/addons/loaders/PCDLoader.js';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {displayLoader, removeLoader} from './html.js'
import {getDefaultAudioContext} from "./audio.js";


document.querySelector('html').style.height = '100%';
document.querySelector('html').style.width = '100%';
const htmlBody = document.querySelector('body');
htmlBody.style.margin = '0px';
htmlBody.style.height = '100%';
htmlBody.style.width = '100%';

const URL_PREFIX = 'https://anasynth.demos.ircam.fr/ivi'

let handler = (function() {

    let _h = {}


    _h.displayElement = htmlBody;

    _h.scene = null
    _h.loader = null ;
    _h.renderer = null

    _h.context = null
    _h.source = null

    _h.wait = function(msg) {
        displayLoader(_h.displayElement, msg);
    }

    _h.display = function(html) {
        _h.displayElement.innerHTML = html;
    }

    _h.init = () => {
        _h.wait('Loading...')
        return Promise.all([
                _h.load_points(URL_PREFIX + '/assets/ivi_shs5_pretrained_hamely_v2_C1_1epoch.embeddings_umap.pcd'), //'/static/assets/ivi_shs5_ha_C1.embeddings_umap.pcd'),
                _h.load_sprite(URL_PREFIX + '/assets/point.png'),
                _h.load_samples(URL_PREFIX + '/assets/samples.json')])
            .then(_h.show)
    }

    _h.load_points = function(url) {
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

    _h.load_sprite = function(url) {
        return new Promise(
            (resolve, reject) => {
                const loader = new THREE.TextureLoader()
                loader.load(
                    // resource URL
                    url, //'/static/assets/test.pcd',
                    // called when the resource is loaded
                    sprite => resolve(sprite),
                    // called when loading is in progresses
                    xhr => console.log('sprite '+ (xhr.loaded / xhr.total * 100) + '% loaded'),
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


    _h.show = values => {
        removeLoader()
        let points, sprite, samples
        [points, sprite, samples] = values

        /*let geometry = points.geometry
        const sizes = new Float32Array(Array(geometry.getAttribute('color').count).fill(0.02))
        geometry.setAttribute('size', new THREE.Float32BufferAttribute( sizes, 1 ))
        geometry.attributes.size.needsUpdate = true*/
        let material = points.material
        material.map = sprite
        material.size = 0.02
        material.alphaTest = 0.5
        material.transparent = true

        // get the canvas that is already set in the base.html and has full height/width from main.css
        const canvas = document.querySelector('#c');

        // renderer
        const renderer = new THREE.WebGLRenderer({antialias: true, canvas});
        //const renderer = new THREE.WebGLRenderer();
        //renderer.setSize( window.innerWidth, window.innerHeight );
        //document.body.appendChild( renderer.domElement );
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
            const url = URL_PREFIX + '/audio/' + sample.class_label + '/' + sample.label + '.mp3' //'/static/assets/tresillo.mp3' //
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
        handler.display(error); //getErrorHtml(error);
    });
