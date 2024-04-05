import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeslistComponent } from './employeslist.component';

describe('EmployeslistComponent', () => {
  let component: EmployeslistComponent;
  let fixture: ComponentFixture<EmployeslistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeslistComponent]
    });
    fixture = TestBed.createComponent(EmployeslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
