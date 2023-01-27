import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { PostViewComponent } from './components/post-view/post-view.component';
import { PostViewSubscriptionComponent } from './components/post-view-subscription/post-view-subscription.component';
import { LoadingModule } from 'src/app/shared/modules/loading/loading.module';
import { PostViewEditComponent } from './components/post-view-edit/post-view-edit.component';
import { TagsModule } from 'src/app/shared/modules/tags/tags.module';

@NgModule({
  declarations: [
    PostViewComponent,
    PostViewSubscriptionComponent,
    PostViewEditComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    TranslateModule.forChild(),
    LoadingModule,
    TagsModule,
  ],
})
export class PostViewModule {}
