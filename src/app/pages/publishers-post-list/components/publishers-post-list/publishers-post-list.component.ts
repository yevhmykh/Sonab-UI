import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sonab-publishers-post-list',
  templateUrl: './publishers-post-list.component.html',
  styleUrls: ['./publishers-post-list.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class PublishersPostListComponent {
  public urlPart: string = 'publishers';
}
