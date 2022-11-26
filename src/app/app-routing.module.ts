import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';

import { ArticlesComponent } from './pages/articles/components/articles/articles.component';
import { ConfirmUserComponent } from './pages/confirm-user/components/confirm-user/confirm-user.component';

const routes: Routes = [
  {
    path: '',
    component: ArticlesComponent
  },
  {
    path: 'confirm-user',
    canActivate: [AuthGuard],
    component: ConfirmUserComponent
  },
  {
    path: '**',
    component: ArticlesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
