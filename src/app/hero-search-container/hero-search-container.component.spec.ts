import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSearchContainerComponent } from './hero-search-container.component';

describe('HeroSearchContainerComponent', () => {
  let component: HeroSearchContainerComponent;
  let fixture: ComponentFixture<HeroSearchContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroSearchContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroSearchContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
