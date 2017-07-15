import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
  MdIconModule,
  MdButtonModule, 
  MdCheckboxModule, 
  MdToolbarModule,
  MdCardModule,
  MdTooltipModule
} from '@angular/material';

var importedModules = [
  BrowserAnimationsModule,
  MdIconModule,

  MdButtonModule,
  MdCheckboxModule,
  MdToolbarModule,
  MdCardModule,
  MdTooltipModule
];

@NgModule({
  imports: importedModules,
  exports: importedModules
})
export class MaterialModule { }
