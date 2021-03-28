import { TestBed } from '@angular/core/testing';

import { PeticionesapiService } from './peticionesapi.service';

describe('PeticionesapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PeticionesapiService = TestBed.get(PeticionesapiService);
    expect(service).toBeTruthy();
  });
});
