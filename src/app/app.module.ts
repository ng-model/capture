import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatCardModule, MatToolbarModule, MatToolbar, MatButtonModule, MatButton, MatMenuModule } from '@angular/material';
import { HtmltopdfComponent } from './pdf/htmltopdf.component';
import { routing } from './routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataTablesModule } from 'angular-datatables';
import { PagerService } from './_services/index';
@NgModule({
  declarations: [
    AppComponent,
    HtmltopdfComponent
  ],
  imports: [
    routing,
    BrowserModule, DataTablesModule, HttpClientModule,
    MatCardModule, MatToolbarModule, MatButtonModule, MatMenuModule,
    BrowserAnimationsModule
  ],
  exports: [
    BrowserModule,
    MatCardModule, MatToolbarModule, MatButtonModule, MatMenuModule
  ],
  providers: [
    PagerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
