import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  Inject,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { AuthService, User } from '@auth0/auth0-angular';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'sonab-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class NavbarComponent implements OnInit {
  public languages: string[] = this.translate.getLangs();
  public currentLanguage: string;
  public isAuthenticated$: Observable<boolean> = this.auth.isAuthenticated$;
  public user$: Observable<User | null | undefined> = this.auth.user$;

  constructor(
    private cdRef: ChangeDetectorRef,
    private auth: AuthService,
    @Inject(DOCUMENT) private doc: Document,
    private translate: TranslateService
  ) {}

  public handleLogin(): void {
    this.auth.loginWithRedirect({
      appState: {
        target: '/confirm-user',
      },
    });
    this.cdRef.detectChanges();
  }

  public handleLogout(): void {
    this.auth.logout({ returnTo: this.doc.location.origin });
    this.cdRef.detectChanges();
  }

  public useLanguage(): void {
    this.translate.use(this.currentLanguage);
  }

  public ngOnInit(): void {
    this.currentLanguage = this.translate.currentLang;
  }
}
