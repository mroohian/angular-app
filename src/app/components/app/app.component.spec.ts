import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../modules/material/material.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { SearchboxComponent } from '../searchbox/searchbox.component';

describe('component: AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let debugElement: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        SearchboxComponent
      ],
      imports: [
        RouterTestingModule,
        FormsModule,
        MaterialModule
      ]
    }).compileComponents();
  }));

  // Create the component
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    debugElement = fixture.debugElement;
    el = debugElement.nativeElement;
  });

  it('should create the app.', () => {
    expect(component).toBeTruthy();
  });

  it('should have an outlet for route components.', () => {
    expect(el.querySelector('router-outlet')).toBeTruthy();
  });

  it('should render the header in the page.', () => {
    expect(el.querySelector('app-header')).toBeTruthy();
  });

  it('should render the footer in the page.', () => {
    fixture.detectChanges();
    expect(el.querySelector('app-footer')).toBeTruthy();
  });
});
