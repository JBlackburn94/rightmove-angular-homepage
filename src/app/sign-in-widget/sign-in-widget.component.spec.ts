import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInWidgetComponent } from './sign-in-widget.component';

describe('SignInWidgetComponent', () => {
  let component: SignInWidgetComponent;
  let fixture: ComponentFixture<SignInWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignInWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignInWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
