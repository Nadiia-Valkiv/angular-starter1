import { Component, signal } from '@angular/core'
import { ScrollService } from '../../../../../core/services/scroll.service'

@Component({
  selector: 'app-home-hero',
  templateUrl: './home-hero.component.html',
  styleUrls: ['./home-hero.component.scss'],
})


export class HomeHeroComponent {
  constructor(private scrollService: ScrollService) {
  }
  scrollToVideo() {
    this.scrollService.scrollToFragment('videoPlayer')
  }
}
