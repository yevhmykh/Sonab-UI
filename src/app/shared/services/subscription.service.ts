import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { ISubscriptionInfo } from '../types/subscriptionInfo.interface';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionService {
  constructor(private http: HttpClient) {}

  public getPostData(): Observable<ISubscriptionInfo[]> {
    const fullUrl = `${environment.apiUrl}/subscriptions/list`;
    return this.http.get<ISubscriptionInfo[]>(fullUrl);
  }

  public subscribeToPublisher(publisherId: number): Observable<{}> {
    const fullUrl = `${environment.apiUrl}/subscriptions/subscribe/${publisherId}`;
    return this.http.post<number>(fullUrl, null);
  }

  public unsubscribeFromPublisher(publisherId: number): Observable<{}> {
    const fullUrl = `${environment.apiUrl}/subscriptions/unsubscribe/${publisherId}`;
    return this.http.delete<number>(fullUrl);
  }
}
