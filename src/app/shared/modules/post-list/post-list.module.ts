import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PostListComponent } from './components/post-list/post-list.component';
import { PaginationModule } from '../pagination/pagination.module';
import { LoadingModule } from '../loading/loading.module';
import { PostService } from '../../services/post.service';

@NgModule({
  declarations: [PostListComponent],
  imports: [CommonModule, RouterModule, PaginationModule, LoadingModule],
  providers: [PostService],
  exports: [PostListComponent],
})
export class PostListModule {}
