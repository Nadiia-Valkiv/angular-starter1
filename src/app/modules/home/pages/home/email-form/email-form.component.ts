import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

import { EmailApiService } from '../../../services/email-api.service'
import { EmailService } from '../../../services/email.service'
import { UniqueEmailValidator } from '../../../validators/unique-email-validator'

import { Component, OnInit, TemplateRef } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.scss'],
})
export class EmailFormComponent implements OnInit {
  emailForm!: FormGroup

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
      this.emailApiService.subscribeEmailUser(this.emailForm.value).pipe()
    } else {
      console.log('email not valid')
      console.log(this.emailForm.value)
    }
  }

  openBackDropCustomClass(content: TemplateRef<any>): void {
    this.modalService.open(content, { backdropClass: 'backdrop-grey', centered: true })
  }
}
