import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'sonab-confirm-user',
  templateUrl: './confirm-user.component.html',
  styleUrls: ['./confirm-user.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ConfirmUserComponent implements OnInit {
  constructor(private router: Router, private userService: UserService) {}

  public ngOnInit(): void {
    this.userService.requestLoad();
    this.router.navigate(['/']);
  }
}
