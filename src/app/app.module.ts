import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { Component1Component } from './components/component1/component1.component';
import { Component3Component } from './components/component3/component3.component';
import { LoginItemComponent } from './components/login-item/login-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Component1Component,
    Component3Component,
    LoginItemComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
