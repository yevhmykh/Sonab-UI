import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AuthHttpInterceptor, AuthModule } from '@auth0/auth0-angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { NotifierModule } from 'angular-notifier';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { environment } from 'src/environments/environment';
import { NavbarModule } from '../shared/modules/navbar/navbar.module';
import { UserService } from '../shared/services/user.service';
import { ConfirmUserModule } from '../pages/confirm-user/confirm-user.module';
import { SignalrService } from '../shared/services/signalr.service';
import { GlobalErrorHandler } from './services/errorHandler.service';
import { MainPostListModule } from '../pages/main-post-list/main-post-list.module';
import { PostViewModule } from '../pages/post-view/post-view.module';
import { PostCreateModule } from '../pages/post-create/post-create.module';
import { UserPostListModule } from '../pages/user-post-list/user-post-list.module';
import { PublishersPostListModule } from '../pages/publishers-post-list/publishers-post-list.module';
import { LoadingInterceptor } from './loading.interceptor';
import { LoaderService } from '../shared/services/loader.service';
import { SubscriptionListModule } from '../pages/subscription-list/subscription-list.module';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AuthModule.forRoot({
      ...environment.auth,
      httpInterceptor: {
        allowedList: [
          {
            uri: `${environment.apiUrl}/posts/all/*`,
            allowAnonymous: true,
          },
          {
            uri: `${environment.apiUrl}/posts/get/*`,
            allowAnonymous: true,
          },
          {
            uri: `${environment.apiUrl}/topictag/search`,
            allowAnonymous: true,
          },
          `${environment.apiUrl}*`,
        ],
      },
    }),
    NgbModule,
    NotifierModule.withConfig({
      position: {
        horizontal: {
          position: 'left',
          distance: 12,
        },
        vertical: {
          gap: 10,
        },
      },
    }),
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    NavbarModule,
    ConfirmUserModule,
    MainPostListModule,
    UserPostListModule,
    PublishersPostListModule,
    PostViewModule,
    PostCreateModule,
    SubscriptionListModule,
  ],
  providers: [
    UserService,
    SignalrService,
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true,
    },
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
  ],
  exports: [NavbarModule, NotifierModule, TranslateModule],
})
export class CoreModule {}
