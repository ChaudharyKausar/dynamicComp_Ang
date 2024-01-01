import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicContainerComponent } from './dynamic-container/dynamic-container.component';
import { MobileComponent } from './dynamic_components/mobile/mobile.component';
import { LaptopComponent } from './dynamic_components/laptop/laptop.component';
import { WatchComponent } from './dynamic_components/watch/watch.component';
import { TvComponent } from './dynamic_components/tv/tv.component';
import { BlueToothComponent } from './dynamic_components/blue-tooth/blue-tooth.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicContainerComponent,
    MobileComponent,
    LaptopComponent,
    WatchComponent,
    TvComponent,
    BlueToothComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
