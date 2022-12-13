import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPostListComponent } from './components/main-post-list/main-post-list.component';
import { PostListModule } from 'src/app/shared/modules/post-list/post-list.module';

@NgModule({
  declarations: [MainPostListComponent],
  imports: [CommonModule, PostListModule],
})
export class MainPostListModule {}
