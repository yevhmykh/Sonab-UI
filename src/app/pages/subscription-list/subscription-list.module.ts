import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { LoadingModule } from 'src/app/shared/modules/loading/loading.module';
import { NoContentModule } from 'src/app/shared/modules/no-content/no-content.module';
import { SubscriptionListComponent } from './components/subscription-list/subscription-list.component';

@NgModule({
  declarations: [SubscriptionListComponent],
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    LoadingModule,
    NoContentModule,
  ],
})
export class SubscriptionListModule {}
