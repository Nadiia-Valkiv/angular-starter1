import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

import { Component, TemplateRef } from '@angular/core'

@Component({
  selector: 'app-week-news',
  templateUrl: './week-news.component.html',
  styleUrls: ['./week-news.component.scss'],
})
export class WeekNewsComponent {
  constructor(private modalService: NgbModal) {}

  openBackDropCustomClass(content: TemplateRef<any>): void {
    this.modalService.open(content, { backdropClass: 'backdrop-grey', centered: true })
  }
}
