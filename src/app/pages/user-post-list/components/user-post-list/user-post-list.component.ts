import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sonab-user-post-list',
  templateUrl: './user-post-list.component.html',
  styleUrls: ['./user-post-list.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class UserPostListComponent {
  public urlPart: string = 'user';
}
