import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColorComponent } from './color/color.component';
import { CvComponent } from './cv/cv.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {
    path : "cv",
    component : CvComponent
  }
  ,
  {
    path :"todo",
    component : TodoComponent
  },
  {
    path :"color/:color",
    component : ColorComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
