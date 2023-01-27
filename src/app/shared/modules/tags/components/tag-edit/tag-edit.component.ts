import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';

import { TopicTagService } from '../../services/topic-tag.service';
import { ITopicTag } from '../../../../types/topicTag.interface';
import { ChooseModeType } from '../../types/choose-mode-type';

@Component({
  selector: 'sonab-tag-edit',
  templateUrl: './tag-edit.component.html',
  styleUrls: ['./tag-edit.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class TagEditComponent implements OnInit {
  @Input('init') public initProps: ITopicTag[] | null;
  @Output('setTags') public setTagEvent: EventEmitter<ITopicTag[]> =
    new EventEmitter<ITopicTag[]>();

  public loadedTags: ITopicTag[] | null;
  public selectedTags: ITopicTag[];
  public choosedTagId: number;
  public tagName: string = '';
  public chooseMode: ChooseModeType = ChooseModeType.None;
  public ChooseModeType: typeof ChooseModeType = ChooseModeType;

  constructor(private tagService: TopicTagService) {}

  public ngOnInit(): void {
    this.selectedTags = this.initProps ? this.initProps : [];
  }

  public load(event: any): void {
    this.chooseMode = ChooseModeType.Search;
    this.tagService.getTags(event.term).subscribe((data: ITopicTag[]) => {
      this.loadedTags = data.filter(
        (item) => !this.selectedTags.map((x) => x.id).includes(item.id)
      );
    });
  }

  public setCreateMode(): void {
    this.chooseMode = ChooseModeType.Create;
  }

  public addNewTag(): void {
    this.selectedTags.push({ id: null, name: this.tagName });
    this.tagName = '';
    this.setTagEvent.emit(this.selectedTags);
    this.chooseMode = ChooseModeType.None;
  }

  public isNameValid(): boolean {
    return (
      this.tagName.length >= 2 &&
      !this.selectedTags
        .map((x) => x.name.toLocaleUpperCase())
        .includes(this.tagName.toLocaleUpperCase())
    );
  }

  public select(tag: ITopicTag): void {
    this.selectedTags.push(tag);
    this.loadedTags = null;
    this.setTagEvent.emit(this.selectedTags);
    this.chooseMode = ChooseModeType.None;
  }

  public remove(tag: ITopicTag): void {
    this.selectedTags = this.selectedTags.filter((item) => item !== tag);
    this.setTagEvent.emit(this.selectedTags);
  }
}
