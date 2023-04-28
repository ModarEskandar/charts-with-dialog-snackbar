import { TestBed } from '@angular/core/testing';

import { MFCDialogService } from './mfc-dialog.service';

describe('MFCDialogService', () => {
  let service: MFCDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MFCDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
