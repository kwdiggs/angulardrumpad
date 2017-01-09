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

  constructor() { }

  // listen to your heart, when he's calling for you...
  // listen for keypresses, active pads are green
  start() {

   // prevent default keypress repetition behavior
   // i.e. 1 press = 1 function call regardless of downpress duration
   let downU = false;
   let downI = false;
   let downO = false;
   let downJ = false;
   let downK = false;
   let downL = false;
   let downN = false;
   let downM = false;
   let downLT = false;

   onkeydown = function(e) {
    if ([85,73,79,74,75,76,78,77,188].indexOf(e.keyCode) !== -1) {
      switch (e.keyCode) {
        case 85:
          if (!downU) {
            downU = true;
            new Audio('../../assets/audio-samples/pack/KickDrop.wav').play();
            document.getElementById("U").classList.remove("btn-primary");
            document.getElementById("U").classList.add("btn-success");
          }
          break;
        case 73:
          if (!downI) {
            downI = true;
            new Audio('../../assets/audio-samples/pack/HiHat.wav').play();
            document.getElementById("I").classList.remove("btn-primary");
            document.getElementById("I").classList.add("btn-success");
          }
          break;
        case 79:
          if (!downO) {
            downO = true;
            new Audio('../../assets/audio-samples/pack/What.wav').play();
            document.getElementById("O").classList.remove("btn-primary");
            document.getElementById("O").classList.add("btn-success");
          }
          break;
        case 74:
          if (!downJ) {
            downJ = true;
            new Audio('../../assets/audio-samples/pack/Kick.wav').play();
            document.getElementById("J").classList.remove("btn-primary");
            document.getElementById("J").classList.add("btn-success");
          }
          break;
        case 75:
          if (!downK) {
            downK = true;
            new Audio('../../assets/audio-samples/pack/Clap.wav').play();
            document.getElementById("K").classList.remove("btn-primary");
            document.getElementById("K").classList.add("btn-success");
          }
          break;
        case 76:
          if (!downL) {
            downL = true;
            new Audio('../../assets/audio-samples/pack/Snare.wav').play();
            document.getElementById("L").classList.remove("btn-primary");
            document.getElementById("L").classList.add("btn-success");
          }
          break;
        case 78:
          if (!downN) {
            downN = true;
            new Audio('../../assets/audio-samples/pack/Timpani.wav').play();
            document.getElementById("N").classList.remove("btn-primary");
            document.getElementById("N").classList.add("btn-success");
          }
          break;
        case 77:
          if (!downM) {
            downM = true;
            new Audio('../../assets/audio-samples/pack/Bell.wav').play();
            document.getElementById("M").classList.remove("btn-primary");
            document.getElementById("M").classList.add("btn-success");
          }
          break;
        case 188:
          if (!downLT) {
            downLT = true;
            new Audio('../../assets/audio-samples/pack/OrchestraHit.wav').play();
            document.getElementById("<").classList.remove("btn-primary");
            document.getElementById("<").classList.add("btn-success");
          }
          break;
        }
      }
    };

    // listen for keydown, inactive pads are blue
    onkeyup = function(e) {
      if ([85,73,79,74,75,76,78,77,188].indexOf(e.keyCode) !== -1) {
        switch (e.keyCode) {
          case 85:
            downU = false;
            document.getElementById("U").classList.remove("btn-success");
            document.getElementById("U").classList.add("btn-primary");
            break;
          case 73:
            downI = false;
            document.getElementById("I").classList.remove("btn-success");
            document.getElementById("I").classList.add("btn-primary");
            break;
          case 79:
            downO = false;
            document.getElementById("O").classList.remove("btn-success");
            document.getElementById("O").classList.add("btn-primary");
            break;
          case 74:
            downJ = false;
            document.getElementById("J").classList.remove("btn-success");
            document.getElementById("J").classList.add("btn-primary");
            break;
          case 75:
            downK = false;
            document.getElementById("K").classList.remove("btn-success");
            document.getElementById("K").classList.add("btn-primary");
            break;
          case 76:
            downL = false;
            document.getElementById("L").classList.remove("btn-success");
            document.getElementById("L").classList.add("btn-primary");
            break;
          case 78:
            downN = false;
            document.getElementById("N").classList.remove("btn-success");
            document.getElementById("N").classList.add("btn-primary");
            break;
          case 77:
            downM = false;
            document.getElementById("M").classList.remove("btn-success");
            document.getElementById("M").classList.add("btn-primary");
            break;
          case 188:
            downLT = false;
            document.getElementById("<").classList.remove("btn-success");
            document.getElementById("<").classList.add("btn-primary");
            break;
        }
      }
    };


  }

}
