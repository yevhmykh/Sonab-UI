import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sonab-main-post-list',
  templateUrl: './main-post-list.component.html',
  styleUrls: ['./main-post-list.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class MainPostListComponent {
  public urlPart: string = 'all';
}
