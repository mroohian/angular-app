import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { DataService } from '../../services/data/data.service';
import { DataServiceMock } from '../../services/data/data.service.mock';

import { ContactComponent } from './contact.component';

describe('component: ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let debugElement: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactComponent ],
      providers: [{
        provide: DataService, useValue: DataServiceMock.instance
      }],
      imports: [ HttpModule, FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    debugElement = fixture.debugElement;
    el = debugElement.nativeElement;
  });

  it('should be created.', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to send a message.', async(() => {
    component.send().then((result) => {
      expect(result).toBeTruthy();
    });
  }));
});
