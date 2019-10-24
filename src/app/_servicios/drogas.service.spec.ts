import { TestBed } from '@angular/core/testing';

import { DrogasService } from './drogas.service';

describe('DrogasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DrogasService = TestBed.get(DrogasService);
    expect(service).toBeTruthy();
  });
});
