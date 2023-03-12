import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

import { LoaderService } from 'src/app/shared/services/loader.service';
import { ITopicTag } from 'src/app/shared/types/topicTag.interface';
import { PostService } from '../../../../services/post.service';
import { IPostShortInfo } from '../../../../types/postShortInfo.interface';
import { TopicTagService } from '../../../tags/services/topic-tag.service';

@Component({
  selector: 'sonab-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class PostListComponent implements OnInit, OnDestroy {
  @Input('urlPart') public urlPartProps: string;

  public isLoading$: Observable<boolean>;
  public data: IPostShortInfo[];
  public count: number;
  public topTags: ITopicTag[];
  public queryParamsSubscription: Subscription;
  public limit: number = 5;
  public baseUrl: string;
  public currentPage: number;
  public selectedTagId: number | null;
  public selectedAuthorId: number | null;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private postService: PostService,
    private topicService: TopicTagService,
    private loadingService: LoaderService
  ) {}

  public ngOnInit(): void {
    this.baseUrl = this.router.url.split('?')[0];

    this.queryParamsSubscription = this.activatedRoute.queryParams.subscribe(
      (params: Params) => {
        this.currentPage = Number(params['page'] || '1');
        this.selectedTagId = params['topicTagId']
          ? Number(params['topicTagId'])
          : null;
        this.selectedAuthorId = params['authorId']
          ? Number(params['authorId'])
          : null;
        this.fetchData();
      }
    );

    this.topicService.getTags(null).subscribe((tags: ITopicTag[]) => {
      this.topTags = tags;
    });

    this.isLoading$ = this.loadingService.isLoading$;
  }

  public ngOnDestroy(): void {
    this.queryParamsSubscription.unsubscribe();
  }

  private fetchData(): void {
    this.postService
      .getCount(this.urlPartProps, this.selectedTagId, this.selectedAuthorId)
      .subscribe((count: number) => {
        this.count = count;
      });

    this.postService
      .getPosts(
        this.urlPartProps,
        this.selectedTagId,
        this.selectedAuthorId,
        this.limit,
        this.currentPage
      )
      .subscribe((data: IPostShortInfo[]) => {
        this.data = data;
      });
  }
}
