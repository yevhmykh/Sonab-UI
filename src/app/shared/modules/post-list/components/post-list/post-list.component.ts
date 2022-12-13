import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { PostService } from '../../../../services/post.service';
import { IPostShortInfo } from '../../../../types/postShortInfo.interface';

@Component({
  selector: 'sonab-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class PostListComponent implements OnInit, OnDestroy {
  @Input('urlPart') public urlPartProps: string;

  public isLoading: boolean = true;
  public data: IPostShortInfo[];
  public count: number;
  public queryParamsSubscription: Subscription;
  public limit: number = 5;
  public baseUrl: string;
  public currentPage: number;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private postService: PostService
  ) {}

  public ngOnInit(): void {
    this.baseUrl = this.router.url.split('?')[0];
    this.postService.getCount(this.urlPartProps).subscribe((count: number) => {
      this.count = count;
    });

    this.queryParamsSubscription = this.activatedRoute.queryParams.subscribe(
      (params: Params) => {
        this.currentPage = Number(params['page'] || '1');
        this.fetchData();
      }
    );
  }

  public ngOnDestroy(): void {
    this.queryParamsSubscription.unsubscribe();
  }

  private fetchData(): void {
    this.isLoading = true;
    this.postService
      .getPosts(this.urlPartProps, this.limit, this.currentPage)
      .subscribe((data: IPostShortInfo[]) => {
        this.data = data;
        this.isLoading = false;
      });
  }
}
