/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SoundPlaybackService } from './sound-playback.service';

describe('SoundPlaybackService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SoundPlaybackService]
    });
  });

  it('should ...', inject([SoundPlaybackService], (service: SoundPlaybackService) => {
    expect(service).toBeTruthy();
  }));
});
