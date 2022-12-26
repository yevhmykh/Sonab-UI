import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  constructor(private translate: TranslateService) {}

  public getTranslatedMessages(errorResponse: HttpErrorResponse): string[] {
    if (errorResponse.status === 0) {
      return [this.translate.instant('Error.Down')];
    } else if (errorResponse.error.errors) {
      return this.convertErrors(errorResponse.error.errors);
    } else {
      return [
        this.translate.instant('Error.Status', {
          code: errorResponse.status,
        }),
      ];
    }
  }

  private convertErrors(errors: { [key: string]: string[] }): string[] {
    return Object.values(errors)
      .flatMap((x) => x)
      .map((x) => this.translate.instant(x));
  }
}
