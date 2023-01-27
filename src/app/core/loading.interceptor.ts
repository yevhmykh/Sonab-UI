import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  private totalMainRequests = 0;
  private totalSubRequests = 0;
  private subRequests: string[] = ['topictag'];

  constructor(private loadingService: LoaderService) {}

  public intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (this.isApiCall(request)) {
      if (!this.isSubRequest(request)) {
        this.totalMainRequests++;
        this.loadingService.setLoading(true);
      } else {
        this.totalSubRequests++;
        this.loadingService.setSubLoading(true);
      }
    }
    return next.handle(request).pipe(
      finalize(() => {
        if (this.isApiCall(request)) {
          if (!this.isSubRequest(request)) {
            this.totalMainRequests--;
          } else {
            this.totalSubRequests--;
          }
        }
        if (this.totalMainRequests === 0) {
          this.loadingService.setLoading(false);
        }
        if (this.totalSubRequests === 0) {
          this.loadingService.setSubLoading(false);
        }
      })
    );
  }

  private isApiCall(request: HttpRequest<unknown>): boolean {
    return request.url.includes(environment.apiUrl);
  }

  private isSubRequest(request: HttpRequest<unknown>): boolean {
    return this.subRequests.some((x) => request.url.includes(x));
  }
}
