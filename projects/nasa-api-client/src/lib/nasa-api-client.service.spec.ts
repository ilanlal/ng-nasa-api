import { TestBed } from '@angular/core/testing';

import { NasaApiClientService } from './nasa-api-client.service';

describe('NasaApiClientService', () => {
  let service: NasaApiClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NasaApiClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
