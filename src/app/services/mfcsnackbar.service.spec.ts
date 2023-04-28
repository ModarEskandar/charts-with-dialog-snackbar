import { TestBed } from '@angular/core/testing';

import { MFCsnackbarService } from './mfcsnackbar.service';

describe('MFCsnackbarService', () => {
  let service: MFCsnackbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MFCsnackbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
