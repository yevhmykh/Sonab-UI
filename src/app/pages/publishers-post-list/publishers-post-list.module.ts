import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublishersPostListComponent } from './components/publishers-post-list/publishers-post-list.component';
import { PostListModule } from 'src/app/shared/modules/post-list/post-list.module';

@NgModule({
  declarations: [PublishersPostListComponent],
  imports: [CommonModule, PostListModule],
})
export class PublishersPostListModule {}
