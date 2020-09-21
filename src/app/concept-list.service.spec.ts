import { TestBed } from '@angular/core/testing';

import { ConceptListService } from './concept-list.service';

describe('ConceptListService', () => {
  let service: ConceptListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConceptListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
