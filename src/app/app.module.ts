import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageCompressService, ResizeOptions, ImageUtilityService } from 'ng2-image-compress';
import { NgxImageCompressService } from 'ngx-image-compress';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ImageCompressService, ResizeOptions, NgxImageCompressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
