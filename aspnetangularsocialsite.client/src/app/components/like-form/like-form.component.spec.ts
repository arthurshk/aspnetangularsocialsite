import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeFormComponent } from './like-form.component';

describe('LikeFormComponent', () => {
  let component: LikeFormComponent;
  let fixture: ComponentFixture<LikeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LikeFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LikeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
