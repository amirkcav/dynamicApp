import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable()
export class AppService {

  constructor(private http: HttpClient) { }

  getSessionInfo() {
    return this.http
      .get(environment.dynamicFormBaseDevUrl + environment.sessionInfoUrl)
      .toPromise()
      .then(response => {
        return response;
      });
  }

}
