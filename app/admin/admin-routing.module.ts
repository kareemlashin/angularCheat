import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { OneComponent } from './one/one.component';
import { ThreeComponent } from './three/three.component';

const routes: Routes = [
  {
    path: '', component: ThreeComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
