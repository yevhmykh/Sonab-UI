import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { PostCreateComponent } from './components/post-create/post-create.component';
import { LoadingModule } from 'src/app/shared/modules/loading/loading.module';
import { TagsModule } from 'src/app/shared/modules/tags/tags.module';

@NgModule({
  declarations: [PostCreateComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule.forChild(),
    LoadingModule,
    TagsModule,
  ],
})
export class PostCreateModule {}
