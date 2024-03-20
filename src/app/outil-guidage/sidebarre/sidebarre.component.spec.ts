import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarreComponent } from './sidebarre.component';

describe('SidebarreComponent', () => {
  let component: SidebarreComponent;
  let fixture: ComponentFixture<SidebarreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarreComponent]
    });
    fixture = TestBed.createComponent(SidebarreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
