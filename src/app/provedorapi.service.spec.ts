import { TestBed } from '@angular/core/testing';

import { ProvedorapiService } from './provedorapi.service';

describe('ProvedorapiService', () => {
  let service: ProvedorapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProvedorapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
