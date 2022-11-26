import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AuthHttpInterceptor, AuthModule } from '@auth0/auth0-angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { NavbarModule } from '../shared/modules/navbar/navbar.module';
import { UserService } from '../shared/services/user.service';
import { ConfirmUserModule } from '../pages/confirm-user/confirm-user.module';
import { ArticlesModule } from '../pages/articles/articles.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AuthModule.forRoot({
      ...environment.auth,
      httpInterceptor: {
        allowedList: [
          {
            uri: `${environment.apiUrl}Some/*`,
            allowAnonymous: true,
          },
          `${environment.apiUrl}*`,
        ],
      },
      NgbModule,
      NavbarModule,
      ConfirmUserModule,
      ArticlesModule,
    }),
  ],
  providers: [
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true,
    },
  ],
  exports: [NavbarModule],
})
export class CoreModule {}
