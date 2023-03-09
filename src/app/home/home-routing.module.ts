import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';

import { DashComponent } from './dash/dash.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {path:'', component: HomeComponent,
  children:[
    {path:'dash', component: DashComponent},
    {path: 'customer', component: CustomerComponent}
  ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
