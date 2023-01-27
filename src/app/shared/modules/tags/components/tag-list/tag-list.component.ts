import { Component, Input, ViewEncapsulation } from '@angular/core';

import { ITopicTag } from '../../../../types/topicTag.interface';

@Component({
  selector: 'sonab-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class TagListComponent {
  @Input('tags') public tagsProps: ITopicTag[] = [];

  constructor() {}
}
