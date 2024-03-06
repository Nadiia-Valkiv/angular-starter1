import { Component } from '@angular/core'

@Component({
  selector: 'app-live-video-stream-component',
  templateUrl: './live-video-stream.component.html',
  styleUrls: ['./live-video-stream.component.scss'],
})
export class LiveVideoStreamComponent {
  showVideo = false

  playVideo(): void {
    this.showVideo = true
  }

  closeVideo(): void {
    this.showVideo = false
  }
}
