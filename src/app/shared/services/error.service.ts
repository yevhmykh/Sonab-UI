import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  constructor(private translate: TranslateService) {}

  public getTranslatedMessages(error: HttpErrorResponse): string[] {
    if (error.status == 0) {
      return [this.translate.instant('Error.Down')];
    } else if (error.error.Errors) {
      return this.convertErrors(error.error.Errors);
    } else {
      return [
        this.translate.instant('Error.Status', {
          code: error.status,
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
