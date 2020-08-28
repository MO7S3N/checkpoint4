import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvComponent } from './cv/cv.component';
import { ListComponent } from './cv/list/list.component';
import { DetailComponent } from './cv/detail/detail.component';
import { ItemComponent } from './cv/item/item.component';


@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    ListComponent,
    DetailComponent,
    ItemComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
