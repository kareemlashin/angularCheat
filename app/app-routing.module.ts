import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './base/base.component';
import { PassComponent } from './pass/pass.component';
import { FormComponent } from './form/form.component';
import { MainComponent } from './admin/main/main.component';
import { NowComponent } from './now/now.component';
import { AdminModule } from './admin/admin.module';

const routes: Routes = [
  // empty
  { path: '', redirectTo: '/base', pathMatch: 'full' },
  // path
  { path: 'base', component: BaseComponent },
  { path: 'form', component: FormComponent },
  { path: 'main', component: MainComponent },
  { path: 'now', component: NowComponent },
  { path: 'pass', component: PassComponent },
  { path: 'pass/:id', component: PassComponent },
  { path: 'pass/:name', component: PassComponent },
  // any to go this
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'doctor', loadChildren: () => import('./doctor/doctor.module').then(m => m.DoctorModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
