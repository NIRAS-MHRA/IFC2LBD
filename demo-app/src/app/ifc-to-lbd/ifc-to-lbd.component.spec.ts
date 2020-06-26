import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IfcToLbdComponent } from './ifc-to-lbd.component';

describe('IfcToLbdComponent', () => {
  let component: IfcToLbdComponent;
  let fixture: ComponentFixture<IfcToLbdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IfcToLbdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IfcToLbdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
