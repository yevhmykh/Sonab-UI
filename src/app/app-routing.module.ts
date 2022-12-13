import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';

import { ConfirmUserComponent } from './pages/confirm-user/components/confirm-user/confirm-user.component';
import { MainPostListComponent } from './pages/main-post-list/components/main-post-list/main-post-list.component';
import { PostCreateComponent } from './pages/post-create/components/post-create/post-create.component';
import { PostViewComponent } from './pages/post-view/components/post-view/post-view.component';
import { UserPostListComponent } from './pages/user-post-list/components/user-post-list/user-post-list.component';

const routes: Routes = [
  {
    path: 'post/all',
    component: MainPostListComponent,
  },
  {
    path: 'post/user',
    canActivate: [AuthGuard],
    component: UserPostListComponent,
  },
  {
    path: 'post/create',
    canActivate: [AuthGuard],
    component: PostCreateComponent,
  },
  {
    path: 'post/:id',
    component: PostViewComponent,
  },
  {
    path: 'confirm-user',
    canActivate: [AuthGuard],
    component: ConfirmUserComponent,
  },
  {
    path: '',
    redirectTo: 'post/all',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'post/all',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
