import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyServiceService } from './my-service.service';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewcmpComponent } from './newcmp/newcmp.component';

import { HttpclientComponent } from './httpclient/httpclient.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent, NewcmpComponent, HttpclientComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [MyServiceService, HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
