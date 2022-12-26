import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishersPostListComponent } from './publishers-post-list.component';

describe('PublishersPostListComponent', () => {
  let component: PublishersPostListComponent;
  let fixture: ComponentFixture<PublishersPostListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PublishersPostListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PublishersPostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
