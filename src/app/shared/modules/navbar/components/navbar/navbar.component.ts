import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  Inject,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'sonab-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class NavbarComponent implements OnInit {
  public isAuthenticated$: Observable<boolean> = this.auth.isAuthenticated$;

  constructor(
    private cdRef: ChangeDetectorRef,
    private auth: AuthService,
    @Inject(DOCUMENT) private doc: Document
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

  public ngOnInit(): void {}
}
