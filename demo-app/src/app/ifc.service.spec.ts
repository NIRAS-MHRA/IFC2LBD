import { TestBed } from '@angular/core/testing';

import { IFCService } from './services/ifc.service';

describe('IfcService', () => {
  let service: IFCService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IFCService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
