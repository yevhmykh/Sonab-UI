import { Injectable } from '@angular/core';
import { NotifierService } from 'angular-notifier';

import { INotificationMessage } from '../types/notificationMessage.interface';
import { NoticationType } from '../types/notificationType.enum';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private notifierService: NotifierService) {}

  public showNotification(notification: INotificationMessage) {
    switch (notification.type) {
      case NoticationType.Error:
        this.showError(notification.message);
        break;

      default:
        this.showMessage(notification.message);
        break;
    }
  }

  public showMessage(message: string) {
    this.notifierService.notify('info', message);
  }

  public showError(message: string) {
    this.notifierService.notify('error', message);
  }
}
