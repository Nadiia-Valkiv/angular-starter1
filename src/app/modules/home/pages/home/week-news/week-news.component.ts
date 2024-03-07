import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

import { Component, TemplateRef, inject } from '@angular/core'

@Component({
  selector: 'app-week-news',
  templateUrl: './week-news.component.html',
  styleUrls: ['./week-news.component.scss'],
})
export class WeekNewsComponent {
  private modalService = inject(NgbModal)

  openBackDropCustomClass(content: TemplateRef<any>): void {
    this.modalService.open(content, { backdropClass: 'backdrop-grey', centered: true })
  }
}
