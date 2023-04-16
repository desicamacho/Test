import { TestBed } from '@angular/core/testing';

import { ScrewsService } from './screws.service';

describe('ScrewsService', () => {
  let service: ScrewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
