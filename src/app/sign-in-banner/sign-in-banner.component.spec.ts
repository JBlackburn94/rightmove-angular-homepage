import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInBannerComponent } from './sign-in-banner.component';

describe('SignInBannerComponent', () => {
  let component: SignInBannerComponent;
  let fixture: ComponentFixture<SignInBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignInBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignInBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
