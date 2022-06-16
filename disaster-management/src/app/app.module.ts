import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TsunamiComponent } from './tsunami/tsunami.component';
import { HomeComponent } from './home/home.component';
import { FloodsComponent } from './floods/floods.component';
import { EarthquakeComponent } from './earthquake/earthquake.component';
import { TornadoeComponent } from './tornadoe/tornadoe.component';
import { CycloneComponent } from './cyclone/cyclone.component';

@NgModule({
  declarations: [
    AppComponent,
    TsunamiComponent,
    HomeComponent,
    FloodsComponent,
    EarthquakeComponent,
    TornadoeComponent,
    CycloneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
