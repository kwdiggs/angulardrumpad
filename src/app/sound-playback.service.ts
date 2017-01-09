import { Injectable } from '@angular/core';

@Injectable()
export class SoundPlaybackService {
  /*
  85 = U
  73 = I
  79 = O
  74 = J
  75 = K
  76 = L
  78 = N
  77 = M
  188 = '<'
  */

  constructor() {
  }

  sounds: {[keycode: number]: string} = {
    85: '../../assets/audio-samples/pack/KickDrop.wav',
    73: '../../assets/audio-samples/pack/HiHat.wav',
    79: '../../assets/audio-samples/pack/What.wav',
    74: '../../assets/audio-samples/pack/Kick.wav',
    75: '../../assets/audio-samples/pack/Clap.wav',
    76: '../../assets/audio-samples/pack/Snare.wav',
    78: '../../assets/audio-samples/pack/Timpani.wav',
    77: '../../assets/audio-samples/pack/Bell.wav',
    188: '../../assets/audio-samples/pack/OrchestraHit.wav'
  };

  // listen to your heart, when he's calling for you...
  // listen for keypresses, active pads are green
  playSound(keycode: number) {
    if (this.sounds[keycode]) {
      new Audio(this.sounds[keycode]).play();
    }
  }

}
