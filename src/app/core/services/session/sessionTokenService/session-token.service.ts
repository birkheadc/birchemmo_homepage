import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import ICredentials from 'src/app/core/types/credentials/iCredentials';
import ITokenWrapper from 'src/app/core/types/tokenWrapper/tokenWrapper';
import { Buffer } from 'buffer';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SessionTokenService {

  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  getSessionToken(credentials: ICredentials): Observable<ITokenWrapper> {
    const url: string = environment.userApiUrl + "/session";
    const headers: HttpHeaders = new HttpHeaders({
      "Authorization": this.credentialsToBasicAuth(credentials)
    });
    return this.http.get<ITokenWrapper>(url, {
      headers: headers
    });
  }

  private credentialsToBasicAuth(credentials: ICredentials): string {
    const code: string = Buffer.from(credentials.username + ":" + credentials.password).toString('base64');
    return "Basic " + code;
  }
}
