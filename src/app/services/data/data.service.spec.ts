import { TestBed, inject } from '@angular/core/testing';

import { HttpModule } from '@angular/http';

import { DataService } from './data.service';

describe('service: DataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ DataService ],
      imports: [ HttpModule ]
    });
  });

  it('should be created.', inject([DataService], (service: DataService) => {
    expect(service).toBeTruthy();
  }));
});
