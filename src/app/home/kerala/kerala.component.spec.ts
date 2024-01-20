import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeralaComponent } from './kerala.component';

describe('KeralaComponent', () => {
  let component: KeralaComponent;
  let fixture: ComponentFixture<KeralaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KeralaComponent]
    });
    fixture = TestBed.createComponent(KeralaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
