import { TestBed } from '@angular/core/testing';

import { CaseReqService } from './case-req.service';

describe('CaseReqService', () => {
  let service: CaseReqService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaseReqService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
