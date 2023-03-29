const SR = 44100

export function getDefaultAudioContext(sampleRate= SR) {

    const constructor = window.webkitAudioContext ? window.webkitAudioContext : window.AudioContext;
    return new constructor({
        //latencyHint: "playback",
        sampleRate: sampleRate
    });
}


