import { TestBed } from '@angular/core/testing';

import { BasiccalcservicesService } from './basiccalcservices.service';

describe('BasiccalcservicesService', () => {
  let service: BasiccalcservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasiccalcservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
