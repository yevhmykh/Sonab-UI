import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { PostService } from 'src/app/shared/services/post.service';
import {
  ContentMinLength,
  TitleMaxLength,
  TitleMinLength,
} from 'src/app/shared/constants/limits';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class PostCreateComponent implements OnInit {
  public isLoading: boolean = false;
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
    private router: Router
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
  }

  public onSubmit(): void {
    this.isLoading = true;
    this.postService.createPost(this.form.value).subscribe((id: number) => {
      this.router.navigate(['/post', id]);
    });
  }
}
