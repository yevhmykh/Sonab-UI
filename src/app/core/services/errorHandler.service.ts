import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';

import { ErrorService } from '../../shared/services/error.service';
import { NotificationService } from '../../shared/services/notification.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(
    private notificationService: NotificationService,
    private errorService: ErrorService
  ) {}

  public handleError(error: any): void {
    if (!navigator.onLine) {
      this.notificationService.showTranslatedError('Error.Connection');
      return;
    }
    if (error instanceof HttpErrorResponse) {
      this.handleHttpError(error);
      return;
    }

    console.log(error);
    this.notificationService.showError(
      error.message ? error.message : error.toString()
    );
  }

  private handleHttpError(error: HttpErrorResponse) {
    this.notificationService.showTranslatedError(
      this.errorService.getTranslatedMessages(error).join(', ')
    );
  }
}
