import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { SignalrService } from 'src/app/shared/services/signalr.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'sonab-confirm-user',
  templateUrl: './confirm-user.component.html',
  styleUrls: ['./confirm-user.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ConfirmUserComponent implements OnInit {
  constructor(
    private router: Router,
    public signalRService: SignalrService,
    private userService: UserService
  ) {}

  public ngOnInit(): void {
    this.userService.requestLoad();
    this.signalRService.startConnection();
    this.signalRService.addNotificationListener();

    this.router.navigate(['/']);
  }
}
