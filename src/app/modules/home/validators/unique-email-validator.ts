import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import { EmailService } from '../services/email.service'

import { AbstractControl, AsyncValidatorFn } from '@angular/forms'

export class UniqueEmailValidator {
  static createValidator(emailService: EmailService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<{ emailAlreadyExists: boolean } | null> => {
      return emailService
        .checkIfEmailExists({ email: control.value })
        .pipe(map((result: boolean) => (result ? { emailAlreadyExists: true } : null)))
    }
  }
}
