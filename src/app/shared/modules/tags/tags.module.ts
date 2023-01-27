import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

import { TagEditComponent } from './components/tag-edit/tag-edit.component';
import { TagListComponent } from './components/tag-list/tag-list.component';
import { AutoFocusDirective } from './directives/auto-focus.directive';
import { TopicTagService } from './services/topic-tag.service';
import { TopicTagsCacheService } from './services/topic-tags-cache.service';

@NgModule({
  declarations: [TagEditComponent, TagListComponent, AutoFocusDirective],
  imports: [CommonModule, NgSelectModule, FormsModule],
  providers: [TopicTagService, TopicTagsCacheService],
  exports: [TagListComponent, TagEditComponent],
})
export class TagsModule {}
