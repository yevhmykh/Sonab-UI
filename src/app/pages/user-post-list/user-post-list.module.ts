import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserPostListComponent } from './components/user-post-list/user-post-list.component';
import { PostListModule } from 'src/app/shared/modules/post-list/post-list.module';

@NgModule({
  declarations: [UserPostListComponent],
  imports: [CommonModule, PostListModule],
})
export class UserPostListModule {}
