import { Component, Input, ViewEncapsulation } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';

import { SubscriptionService } from 'src/app/shared/services/subscription.service';

@Component({
  selector: 'sonab-post-view-subscription',
  templateUrl: './post-view-subscription.component.html',
  styleUrls: ['./post-view-subscription.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class PostViewSubscriptionComponent {
  @Input('isSubscribed') public isSubscribedProps: boolean;
  @Input('publisherId') public publisherIdProps: number;

  public isAuthenticated$: Observable<boolean> = this.auth.isAuthenticated$;

  constructor(
    private auth: AuthService,
    private subscriptionService: SubscriptionService
  ) {}

  public subscribe(): void {
    this.subscriptionService
      .subscribeToPublisher(this.publisherIdProps)
      .subscribe(() => {
        this.isSubscribedProps = true;
      });
  }

  public unsubscribe(): void {
    this.subscriptionService
      .unsubscribeFromPublisher(this.publisherIdProps)
      .subscribe(() => {
        this.isSubscribedProps = false;
      });
  }
}
