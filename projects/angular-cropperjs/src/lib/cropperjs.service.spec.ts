import { TestBed, inject } from '@angular/core/testing';

import { CropperjsService } from './cropperjs.service';

describe('CropperjsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CropperjsService]
    });
  });

  it('should be created', inject([CropperjsService], (service: CropperjsService) => {
    expect(service).toBeTruthy();
  }));
});
