import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../modules/material/material.module';

import { SearchboxComponent } from './searchbox.component';

describe('SearchboxComponent', () => {
  let component: SearchboxComponent;
  let fixture: ComponentFixture<SearchboxComponent>;
  let debugElement: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchboxComponent ],
      imports: [ FormsModule, MaterialModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    debugElement = fixture.debugElement;
    el = debugElement.nativeElement;
  });

  it('should be created.', () => {
    expect(component).toBeTruthy();
  });
});
