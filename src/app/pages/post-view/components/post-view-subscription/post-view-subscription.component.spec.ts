import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostViewSubscriptionComponent } from './post-view-subscription.component';

describe('PostViewSubscriptionComponent', () => {
  let component: PostViewSubscriptionComponent;
  let fixture: ComponentFixture<PostViewSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostViewSubscriptionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PostViewSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
