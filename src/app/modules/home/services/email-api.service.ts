import { Observable } from 'rxjs'

import { EmailRequest } from '../interfaces/emailRequest'

import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class EmailApiService {
  private checkUniqueEmailUrl = 'https://rm-united24-rebuild-api-public.demo.ukrohost.com/appeal/check-unique-email'
  private subscribeUserUrl = 'https://rm-united24-rebuild-api-public.demo.ukrohost.com/appeal/create'

  constructor(private httpClient: HttpClient) {}

  subscribeEmailUser(data: EmailRequest): Observable<any> {
    return this.sendPostRequest(this.subscribeUserUrl, data)
  }

  checkUniqueEmail(data: EmailRequest): Observable<any> {
    return this.sendPostRequest(this.checkUniqueEmailUrl, data)
  }

  private sendPostRequest(url: string, data: EmailRequest): Observable<any> {
    return this.httpClient.post<EmailRequest>(url, data)
  }
}
