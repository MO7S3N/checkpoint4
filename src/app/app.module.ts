import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvComponent } from './cv/cv.component';
import { ListComponent } from './cv/list/list.component';
import { DetailComponent } from './cv/detail/detail.component';
import { ItemComponent } from './cv/item/item.component';
import { DefaultImagePipe } from './pipes/default-image.pipe';
import { TodoComponent } from './todo/todo.component';
import {FormsModule} from '@angular/forms';
import { EmbaucheComponent } from './cv/embauche/embauche.component';
import { HeaderComponent } from './header/header.component';
import { RoutersimulatorComponent } from './routersimulator/routersimulator.component';
import { ColorComponent } from './color/color.component';
import { AddcvComponent } from './cv/addcv/addcv.component';
import { DeletecvComponent } from './cv/deletecv/deletecv.component';
import { DetailpersonComponent } from './cv/detailperson/detailperson.component';
import { LoginComponent } from './login/login.component';
import { SliderObservableComponent } from './asyncProg/slider-observable/slider-observable.component';
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    ListComponent,
    DetailComponent,
    ItemComponent,
    DefaultImagePipe,
    TodoComponent,
    EmbaucheComponent,
    HeaderComponent,
    RoutersimulatorComponent,
    ColorComponent,
    AddcvComponent,
    DeletecvComponent,
    DetailpersonComponent,
    LoginComponent,
    SliderObservableComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
