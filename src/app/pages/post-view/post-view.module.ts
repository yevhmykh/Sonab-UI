import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { PostViewComponent } from './components/post-view/post-view.component';
import { LoadingModule } from 'src/app/shared/modules/loading/loading.module';

@NgModule({
  declarations: [PostViewComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    TranslateModule.forChild(),
    LoadingModule,
  ],
})
export class PostViewModule {}
