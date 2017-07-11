import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouteModule } from './modules/app-route/app-route.module';
import { HttpModule } from '@angular/http';
import { MaterialModule } from './modules/material/material.module';

import { DataService } from './services/data/data.service';

import { AppComponent } from './components/app/app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,    
    AppRouteModule,
    HttpModule,    
    MaterialModule    
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
