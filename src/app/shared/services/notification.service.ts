import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NotifierService } from 'angular-notifier';

import { INotificationMessage } from '../types/notificationMessage.interface';
import { NoticationType } from '../types/notificationType.enum';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(
    private notifierService: NotifierService,
    private translate: TranslateService
  ) {}

  public showNotification(notification: INotificationMessage) {
    switch (notification.type) {
      case NoticationType.Error:
        this.showTranslatedError(notification.data);
        break;

      default:
        this.showMessage(notification.data);
        break;
    }
  }

  public showMessage(message: string) {
    this.notifierService.notify('info', message);
  }

  public showError(message: string) {
    this.notifierService.notify(
      'error',
      this.translate.instant('Error.Base', { message })
    );
  }

  public showTranslatedError(message: string, interpolateParams?: Object) {
    this.notifierService.notify(
      'error',
      this.translate.instant('Error.Base', {
        message: this.translate.instant(message, interpolateParams),
      })
    );
  }
}
