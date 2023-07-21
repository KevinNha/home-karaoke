import * as Tone from "tone"

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'changePitch') {
      var audioCtx = new (window.AudioContext || window.webkitAudioContext);
      var mediaElem = document.querySelector('video');
      var stream = audioCtx.createMediaElementSource(mediaElem);
      var gainNode = audioCtx.createGain();
      
      stream.connect(gainNode);
      
      Tone.setContext(audioCtx);
      
      var pitchShift = new Tone.PitchShift();
      
      Tone.connect(gainNode, pitchShift);
      Tone.connect(pitchShift, audioCtx.destination);

      // pitchShift.pitch = 12/4 // temporary
      // mediaElem.playbackRate = 2.5
    }
});