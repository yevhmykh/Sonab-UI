import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { NotificationService } from './notification.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private notificationService: NotificationService) {}

  public handleError(error: any): void {
    if (!navigator.onLine) {
      this.notificationService.showError('No Internet Connection');
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
    if (error.status == 0) {
      this.notificationService.showError('Server is down');
    } else {
      this.notificationService.showError(
        error.message ? error.message : `Status code is: ${error.status}`
      );
    }
  }
}
