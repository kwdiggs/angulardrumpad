import { Component, OnInit } from '@angular/core';
import { SoundPlaybackService } from '../sound-playback.service';

@Component({
  selector: 'app-drum-widget',
  templateUrl: './drum-widget.component.html',
  styleUrls: ['./drum-widget.component.css'],
  providers: [SoundPlaybackService]
})
export class DrumWidgetComponent implements OnInit {

  constructor(private _playbackService: SoundPlaybackService) {

  }

  ngOnInit() {
    this._playbackService.start();
  }

}
