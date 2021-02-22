import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseComponent } from './base/base.component';
import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main/main.component';
import { PassComponent } from './pass/pass.component';
import { FormComponent } from './form/form.component';
import { DataComponent } from './data/data.component';
import { NowComponent } from './now/now.component';
// modules

import {FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PipeComponent } from './pipe/pipe.component';
import { AdminModule } from './admin/admin.module';
@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    NavComponent,
    MainComponent,
    PassComponent,
    FormComponent,
    DataComponent,
    NowComponent,
    PipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // modules
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,AdminModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
