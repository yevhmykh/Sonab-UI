import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostViewEditComponent } from './post-view-edit.component';

describe('PostViewEditComponent', () => {
  let component: PostViewEditComponent;
  let fixture: ComponentFixture<PostViewEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostViewEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostViewEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
