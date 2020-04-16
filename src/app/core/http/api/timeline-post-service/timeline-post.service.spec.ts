import { TestBed } from '@angular/core/testing';

import { TimelinePostService } from './timeline-post.service';

describe('TimelinePostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TimelinePostService = TestBed.get(TimelinePostService);
    expect(service).toBeTruthy();
  });
});
