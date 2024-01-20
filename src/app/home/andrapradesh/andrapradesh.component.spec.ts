import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndrapradeshComponent } from './andrapradesh.component';

describe('AndrapradeshComponent', () => {
  let component: AndrapradeshComponent;
  let fixture: ComponentFixture<AndrapradeshComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AndrapradeshComponent]
    });
    fixture = TestBed.createComponent(AndrapradeshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
