import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { PostListComponent } from './components/post-list/post-list.component';
import { PaginationModule } from '../pagination/pagination.module';
import { LoadingModule } from '../loading/loading.module';
import { PostService } from '../../services/post.service';
import { NoContentModule } from '../no-content/no-content.module';

@NgModule({
  declarations: [PostListComponent],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule.forChild(),
    LoadingModule,
    PaginationModule,
    NoContentModule,
  ],
  providers: [PostService],
  exports: [PostListComponent],
})
export class PostListModule {}
