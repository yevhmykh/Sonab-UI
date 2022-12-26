import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { LoaderService } from 'src/app/shared/services/loader.service';
import { PostService } from 'src/app/shared/services/post.service';
import { IPostData } from 'src/app/shared/types/postData.interface';
import { IPostFullData } from 'src/app/shared/types/postFullData.interface';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class PostViewComponent implements OnInit {
  @ViewChild('closeButton') public closeButton: {
    nativeElement: { click: () => void };
  };

  public isLoading$: Observable<boolean> = this.loadingService.isLoading$;
  public editData: IPostData | null;
  public postData: IPostFullData;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router,
    private loadingService: LoaderService
  ) {}

  public ngOnInit(): void {
    this.postService
      .getPostData(Number(this.route.snapshot.paramMap.get('id')))
      .subscribe((data: IPostFullData) => {
        this.postData = data;
      });
  }

  public edit(): void {
    this.editData = {
      title: this.postData.title,
      content: this.postData.content,
    };
  }

  public saveChanges(): void {
    this.postService
      .editPost(this.postData.id, this.editData as IPostData)
      .subscribe(() => {
        this.postData.title = this.editData?.title!;
        this.postData.content = this.editData?.content!;
        this.editData = null;
      });
  }

  public cancel(): void {
    this.editData = null;
  }

  public delete(): void {
    this.postService.removePost(this.postData.id).subscribe(() => {
      this.closeButton.nativeElement.click();
      this.router.navigate(['/user']);
    });
  }
}
