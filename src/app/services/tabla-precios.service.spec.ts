import { TestBed } from '@angular/core/testing';

import { TablaPreciosService } from './tabla-precios.service';

describe('TablaPreciosService', () => {
  let service: TablaPreciosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TablaPreciosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
