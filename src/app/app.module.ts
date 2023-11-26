import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { PrimeNgModule } from './modules/primeng.module';
import { AppRoutingModule } from './modules/app-routing.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, PrimeNgModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
