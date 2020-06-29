import { TestBed } from '@angular/core/testing';

import { IfcService } from './ifc.service';

describe('IfcService', () => {
  let service: IfcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IfcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
