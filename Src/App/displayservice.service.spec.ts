import { TestBed, inject } from '@angular/core/testing';

import { DisplayService } from './displayservice.service';

describe('DisplayserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DisplayService]
    });
  });

  it('should be created', inject([DisplayService], (service: DisplayService) => {
    expect(service).toBeTruthy();
  }));
});
