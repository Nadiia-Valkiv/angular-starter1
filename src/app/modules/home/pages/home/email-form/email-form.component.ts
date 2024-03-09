import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { delay } from 'rxjs'

import { EmailApiService } from '../../../services/email-api.service'
import { EmailService } from '../../../services/email.service'
import { UniqueEmailValidator } from '../../../validators/unique-email-validator'

import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.scss'],
})
export class EmailFormComponent implements OnInit {
  emailForm!: FormGroup
  isSendingRequest = false
  isSuccess = false
  isFailed = false

  @ViewChild('content') modalContent: any

  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder,
    private emailApiService: EmailApiService,
    private emailService: EmailService,
  ) {}

  ngOnInit(): void {
    this.emailForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email], [UniqueEmailValidator.createValidator(this.emailService)]),
    })
  }

  onSubmit(): void {
    if (this.emailForm.valid) {
      this.isSendingRequest = true
      this.emailApiService
        .subscribeEmailUser(this.emailForm.value)
        .pipe(delay(3000))
        .subscribe({
          next: () => {
            this.isSuccess = true
            this.isSendingRequest = false
            this.emailForm.reset()
            setTimeout(() => {
              this.openBackDropCustomClass(this.modalContent)
            }, 1000)
          },
          error: () => {
            this.isFailed = true
            this.isSendingRequest = false
            setTimeout(() => {
              this.isFailed = false
            }, 3000)
          },
        })
    }
  }

  openBackDropCustomClass(content: TemplateRef<any>): void {
    this.isSuccess = false
    this.isFailed = false
    this.modalService.open(content, { backdropClass: 'backdrop-grey', centered: true })
  }
}
