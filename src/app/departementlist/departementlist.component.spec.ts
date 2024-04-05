import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartementlistComponent } from './departementlist.component';

describe('DepartementlistComponent', () => {
  let component: DepartementlistComponent;
  let fixture: ComponentFixture<DepartementlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepartementlistComponent]
    });
    fixture = TestBed.createComponent(DepartementlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
