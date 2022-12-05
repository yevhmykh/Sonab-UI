import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { lastValueFrom } from 'rxjs';

import { environment } from 'src/environments/environment';
import { INotificationMessage } from '../types/notificationMessage.interface';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root',
})
export class SignalrService {
  private hubConnection: HubConnection;
  public startConnection = () => {
    let token = this.auth.getAccessTokenSilently();
    this.hubConnection = new HubConnectionBuilder()
      .withUrl(`${environment.apiUrl}/Hub`, {
        accessTokenFactory: () => lastValueFrom(token),
      })
      .build();

    this.hubConnection
      .start()
      .catch((err) => console.log('Error while starting connection: ' + err));
  };

  constructor(
    private auth: AuthService,
    private notificationService: NotificationService
  ) {}

  public addNotificationListener = () => {
    this.hubConnection.on(
      'messageReceived',
      (message: INotificationMessage) => {
        this.notificationService.showNotification(message);
      }
    );
  };
}
