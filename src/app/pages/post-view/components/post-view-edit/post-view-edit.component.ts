import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';

import {
  ContentMinLength,
  TitleMaxLength,
  TitleMinLength,
} from 'src/app/shared/constants/limits';
import { IPostData } from 'src/app/shared/types/postData.interface';

@Component({
  selector: 'sonab-post-view-edit',
  templateUrl: './post-view-edit.component.html',
  styleUrls: ['./post-view-edit.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class PostViewEditComponent {
  @Input('editData') public editDataProps: IPostData;

  @Output('save') public saveEvent = new EventEmitter();
  @Output('cancel') public cancelEvent = new EventEmitter();

  constructor() {}

  public isTitleValid(): boolean {
    return (
      this.editDataProps?.title.length! >= TitleMinLength &&
      this.editDataProps?.title.length! <= TitleMaxLength
    );
  }

  public isContentValid(): boolean {
    return this.editDataProps?.content.length! >= ContentMinLength;
  }

  public saveChanges(): void {
    if (!(this.isTitleValid() && this.isContentValid())) {
      return;
    }

    this.saveEvent.emit();
  }

  public cancel(): void {
    this.cancelEvent.emit();
  }
}
