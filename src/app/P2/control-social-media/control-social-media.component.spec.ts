import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlSocialMediaComponent } from './control-social-media.component';

describe('ControlSocialMediaComponent', () => {
  let component: ControlSocialMediaComponent;
  let fixture: ComponentFixture<ControlSocialMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlSocialMediaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlSocialMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
