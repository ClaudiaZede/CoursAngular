import { TestBed } from '@angular/core/testing';

import { ActuService } from './actu.service';

describe('ActuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActuService = TestBed.get(ActuService);
    expect(service).toBeTruthy();
  });
});
