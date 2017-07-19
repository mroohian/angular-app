import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdIconModule,
  MdButtonModule,
  MdCheckboxModule,
  MdToolbarModule,
  MdCardModule,
  MdTooltipModule,
  MdInputModule
} from '@angular/material';

const importedModules = [
  BrowserAnimationsModule,
  MdIconModule,

  MdButtonModule,
  MdCheckboxModule,
  MdToolbarModule,
  MdCardModule,
  MdTooltipModule,
  MdInputModule
];

@NgModule({
  imports: importedModules,
  exports: importedModules
})
export class MaterialModule { }
