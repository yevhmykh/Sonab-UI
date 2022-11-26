import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfirmUserComponent } from './components/confirm-user/confirm-user.component';
import { LoadingModule } from 'src/app/shared/modules/loading/loading.module';

@NgModule({
  declarations: [ConfirmUserComponent],
  imports: [CommonModule, LoadingModule],
})
export class ConfirmUserModule {}
