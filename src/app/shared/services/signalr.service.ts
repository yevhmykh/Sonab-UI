import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { lastValueFrom, take } from 'rxjs';
import { environment } from 'src/environments/environment';

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
      .then(() => console.log('Connection started'))
      .catch((err) => console.log('Error while starting connection: ' + err));
  };

  constructor(private auth: AuthService) {}

  public addNotificationListener = () => {
    this.hubConnection.on('messageReceived', (data) => {
      console.log(data);
    });
  };
}
