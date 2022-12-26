import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { NoContentComponent } from './components/no-content/no-content.component';

@NgModule({
  declarations: [NoContentComponent],
  imports: [CommonModule, TranslateModule.forChild()],
  exports: [NoContentComponent],
})
export class NoContentModule {}
