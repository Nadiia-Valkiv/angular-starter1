import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import { EmailApiService } from './email-api.service'

import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor(private emailApiService: EmailApiService) {}

  checkIfEmailExists(data: any): Observable<boolean> {
    return this.emailApiService.checkUniqueEmail(data).pipe(
      map((res) => {
        return !res.data.success
      }),
    )
  }
}
