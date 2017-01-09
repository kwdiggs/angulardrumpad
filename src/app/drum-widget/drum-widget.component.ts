import { Component, HostListener } from '@angular/core';
import { SoundPlaybackService } from '../sound-playback.service';

@Component({
  selector: 'app-drum-widget',
  templateUrl: './drum-widget.component.html',
  styleUrls: ['./drum-widget.component.css'],
  providers: [SoundPlaybackService]
})
export class DrumWidgetComponent {

  constructor(private _playbackService: SoundPlaybackService) {
  }

  drumButtons: {label: string, keycode: number, pressed: boolean}[] = [
    {keycode: 85,  label:  'U', pressed: false},
    {keycode: 73,  label:  'I', pressed: false},
    {keycode: 79,  label:  'O', pressed: false},
    {keycode: 74,  label:  'J', pressed: false},
    {keycode: 75,  label:  'K', pressed: false},
    {keycode: 76,  label:  'L', pressed: false},
    {keycode: 78,  label:  'N', pressed: false},
    {keycode: 77,  label:  'M', pressed: false},
    {keycode: 188, label: '<', pressed: false},
  ];

  get drumButtonRows(): {label: string, keycode: number}[][] {
    const rowLength = 3;
    const result: {label: string, keycode: number}[][] = [];

    for (let i = 0; i < this.drumButtons.length; i++) {
      const row = Math.floor(i / rowLength);
      const pos = i % rowLength;
      result[row] = result[row] || [];
      result[row][pos] = this.drumButtons[i];
    }

    return result;
  }

  @HostListener('window:keydown', ['$event.keyCode'])
  pressButton(keycode: number) {
    // play sound and change button color to green
    const button = this.drumButtons.find(b => b.keycode === keycode);
    if (button && !button.pressed) {
      this._playbackService.playSound(keycode);
      button.pressed = true;
    }
  }

  @HostListener('window:keyup', ['$event.keyCode'])
  releaseButton(keycode: number) {
    // return color to blue
    const button = this.drumButtons.find(b => b.keycode === keycode);
    if (button) {
      button.pressed = false;
    }
  }

}
