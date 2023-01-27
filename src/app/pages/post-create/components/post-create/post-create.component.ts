import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { PostService } from 'src/app/shared/services/post.service';
import {
  ContentMinLength,
  TitleMaxLength,
  TitleMinLength,
} from 'src/app/shared/constants/limits';
import { Observable } from 'rxjs';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { ITopicTag } from 'src/app/shared/types/topicTag.interface';
import { IPostData } from 'src/app/shared/types/postData.interface';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class PostCreateComponent implements OnInit {
  private tags: ITopicTag[] | null;

  public isLoading$: Observable<boolean>;
  public form: FormGroup;
  public get title() {
    return this.form.get('title');
  }
  public get content() {
    return this.form.get('content');
  }

  constructor(
    private formBuilder: FormBuilder,
    private postService: PostService,
    private router: Router,
    private loadingService: LoaderService
  ) {}

  public ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: [
        '',
        [
          Validators.required,
          Validators.minLength(TitleMinLength),
          Validators.maxLength(TitleMaxLength),
        ],
      ],
      content: [
        '',
        [Validators.required, Validators.minLength(ContentMinLength)],
      ],
    });

    this.isLoading$ = this.loadingService.isLoading$;
  }

  public setTags(tags: ITopicTag[]) {
    this.tags = tags;
  }

  public onSubmit(): void {
    let data: IPostData = {
      title: this.form.value.title,
      content: this.form.value.content,
      tags: this.tags
    }
    this.postService.createPost(data).subscribe((id: number) => {
      this.router.navigate(['/post', id]);
    });
  }
}
