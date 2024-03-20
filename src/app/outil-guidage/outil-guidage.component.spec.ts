import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutilGuidageComponent } from './outil-guidage.component';

describe('OutilGuidageComponent', () => {
  let component: OutilGuidageComponent;
  let fixture: ComponentFixture<OutilGuidageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutilGuidageComponent]
    });
    fixture = TestBed.createComponent(OutilGuidageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
