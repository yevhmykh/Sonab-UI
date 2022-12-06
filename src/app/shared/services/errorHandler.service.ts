import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';

import { ErrorService } from './error.service';
import { NotificationService } from './notification.service';

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
