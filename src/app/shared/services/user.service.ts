import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  public requestLoad(): void {
    const fullUrl = `${environment.apiUrl}/User/load-info`;
    let request = this.http.post(fullUrl, null);
    request.subscribe();
  }
}
