import { Component, Input, ViewEncapsulation } from '@angular/core';
import { IRouterParams } from 'src/app/shared/types/routerParams.interface';

import { ITopicTag } from '../../../../types/topicTag.interface';

@Component({
  selector: 'sonab-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class TagListComponent {
  @Input('tags') public tagsProps: ITopicTag[] = [];
  @Input('url') public urlProps: string = 'All';
  @Input('selectedId') public selectedIdProps: number | null;
  @Input('params') public paramsProps: IRouterParams = {};

  constructor() {}

  public getRouterParams(topicTagId: number | null, name: any): IRouterParams {
    let routerParams: IRouterParams = { ...this.paramsProps };
    if (this.selectedIdProps != topicTagId) {
      routerParams['topicTagId'] = topicTagId;
    }
    return routerParams;
  }
}
