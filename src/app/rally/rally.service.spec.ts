import { TestBed, inject } from '@angular/core/testing';

import { RallyService } from './rally.service';

describe('RallyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RallyService]
    });
  });

  it('should be created', inject([RallyService], (service: RallyService) => {
    expect(service).toBeTruthy();
  }));
});
