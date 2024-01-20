import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GujaratComponent } from './gujarat.component';

describe('GujaratComponent', () => {
  let component: GujaratComponent;
  let fixture: ComponentFixture<GujaratComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GujaratComponent]
    });
    fixture = TestBed.createComponent(GujaratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
