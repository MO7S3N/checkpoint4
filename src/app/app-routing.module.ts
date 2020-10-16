import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { SliderObservableComponent } from './asyncProg/slider-observable/slider-observable.component';
import { ColorComponent } from './color/color.component';
import { AddcvComponent } from './cv/addcv/addcv.component';
import { CvComponent } from './cv/cv.component';
import { DeletecvComponent } from './cv/deletecv/deletecv.component';
import { DetailComponent } from './cv/detail/detail.component';
import { DetailpersonComponent } from './cv/detailperson/detailperson.component';
import { CvService } from './cv/services/cv.service';
import { LoginComponent } from './login/login.component';
import { TodoComponent } from './todo/todo.component';
import {AuthGuard} from './cv/guards/auth.guard';
import {NotloggedGuard} from './cv/guards/notlogged.guard';



const routes: Routes = [
  {
    path : 'cv' ,  children : [
      {path : '', component : CvComponent},
      {path : 'add' ,
       component : AddcvComponent,
       canActivate : [AuthGuard]
      },
      {path : 'delete' , component : DeletecvComponent},
      {path : ':id', component : DetailpersonComponent}
    ]
  }
  ,
  {
    path :"todo",
    component : TodoComponent
  },
  {
    path :"color/:color",
    component : ColorComponent
  },
  {path : "login" ,
  component : LoginComponent,
  canActivate:[NotloggedGuard]
  },
  {path : "asyncpipe" ,
   component : SliderObservableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
