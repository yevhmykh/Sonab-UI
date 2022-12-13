import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {
  ContentMinLength,
  TitleMaxLength,
  TitleMinLength,
} from 'src/app/shared/constants/limits';
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

  public isLoading: boolean = true;
  public editData: IPostData | null;
  public postData: IPostFullData;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.postService
      .getPostData(Number(this.route.snapshot.paramMap.get('id')))
      .subscribe((data: IPostFullData) => {
        this.postData = data;
        this.isLoading = false;
      });
  }

  public edit(): void {
    this.editData = {
      title: this.postData.title,
      content: this.postData.content,
    };
  }

  public cancel(): void {
    this.editData = null;
  }

  public isTitleValid(): boolean {
    return (
      this.editData?.title.length! >= TitleMinLength &&
      this.editData?.title.length! <= TitleMaxLength
    );
  }

  public isContentValid(): boolean {
    return this.editData?.content.length! >= ContentMinLength;
  }

  public saveChanges(): void {
    if (!(this.isTitleValid() && this.isContentValid())) {
      return;
    }

    this.postService
      .editPost(this.postData.id, this.editData as IPostData)
      .subscribe(() => {
        this.postData.title = this.editData?.title!;
        this.postData.content = this.editData?.content!;
        this.editData = null;
      });
  }

  public delete(): void {
    this.postService.removePost(this.postData.id).subscribe(() => {
      this.closeButton.nativeElement.click();
      this.router.navigate(['/user']);
    });
  }
}
