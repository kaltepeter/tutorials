import { TestBed } from '@angular/core/testing';

import { DinosaurIconsService } from './dinosaur-icons.service';

describe('DinosaurIconsService', () => {
  let service: DinosaurIconsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DinosaurIconsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
