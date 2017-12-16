import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatIconModule,
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatCardModule,
  MatTooltipModule,
  MatInputModule,
  MatMenuModule
} from '@angular/material';

const importedModules = [
  BrowserAnimationsModule,
  MatIconModule,

  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatCardModule,
  MatTooltipModule,
  MatInputModule,
  MatMenuModule
];

@NgModule({
  imports: importedModules,
  exports: importedModules
})
export class MaterialModule { }
