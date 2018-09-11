import { TestBed, inject } from '@angular/core/testing';

import { AgenciaPaqueteriaService } from './agencia-paqueteria.service';

describe('AgenciaPaqueteriaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AgenciaPaqueteriaService]
    });
  });

  it('should be created', inject([AgenciaPaqueteriaService], (service: AgenciaPaqueteriaService) => {
    expect(service).toBeTruthy();
  }));
});
