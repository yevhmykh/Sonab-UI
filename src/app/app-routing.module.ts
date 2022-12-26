import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';

import { ConfirmUserComponent } from './pages/confirm-user/components/confirm-user/confirm-user.component';
import { MainPostListComponent } from './pages/main-post-list/components/main-post-list/main-post-list.component';
import { PostCreateComponent } from './pages/post-create/components/post-create/post-create.component';
import { PostViewComponent } from './pages/post-view/components/post-view/post-view.component';
import { PublishersPostListComponent } from './pages/publishers-post-list/components/publishers-post-list/publishers-post-list.component';
import { SubscriptionListComponent } from './pages/subscription-list/components/subscription-list/subscription-list.component';
import { UserPostListComponent } from './pages/user-post-list/components/user-post-list/user-post-list.component';

const routes: Routes = [
  {
    path: 'post',
    children: [
      {
        path: 'all',
        component: MainPostListComponent,
      },
      {
        path: '',
        canActivate: [AuthGuard],
        children: [
          {
            path: 'user',
            component: UserPostListComponent,
          },
          {
            path: 'publishers',
            component: PublishersPostListComponent,
          },
          {
            path: 'create',
            component: PostCreateComponent,
          },
        ],
      },
      {
        path: ':id',
        component: PostViewComponent,
      },
    ],
  },
  {
    path: 'user',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'subscriptions',
        component: SubscriptionListComponent,
      },
    ],
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
