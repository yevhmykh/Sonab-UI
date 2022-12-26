import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';

import { LoaderService } from 'src/app/shared/services/loader.service';
import { SubscriptionService } from 'src/app/shared/services/subscription.service';
import { ISubscriptionInfo } from 'src/app/shared/types/subscriptionInfo.interface';

@Component({
  selector: 'app-subscription-list',
  templateUrl: './subscription-list.component.html',
  styleUrls: ['./subscription-list.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class SubscriptionListComponent implements OnInit {
  public isLoading$: Observable<boolean> = this.loadingService.isLoading$;
  public data: ISubscriptionInfo[];
  public unsubscribed: number[] = [];

  constructor(
    private subscriptionService: SubscriptionService,
    private loadingService: LoaderService
  ) {}

  public ngOnInit(): void {
    this.subscriptionService
      .getPostData()
      .subscribe((data: ISubscriptionInfo[]) => {
        this.data = data;
      });
  }

  public undo(id: number): void {
    this.subscriptionService.subscribeToPublisher(id).subscribe(() => {
      this.unsubscribed = this.unsubscribed.filter((item) => item !== id);
    });
  }

  public unsubscribe(id: number): void {
    this.subscriptionService.unsubscribeFromPublisher(id).subscribe(() => {
      this.unsubscribed.push(id);
    });
  }
}
