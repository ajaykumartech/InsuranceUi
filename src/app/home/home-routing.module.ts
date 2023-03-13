import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerSearchDeatilsComponent } from './customer/customer-search-details/customer-search-details.component';

import { CustomerComponent } from './customer/customer.component';

import { DashComponent } from './dash/dash.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {path:'', component: HomeComponent,
  children:[
    {path:'dash', component: DashComponent},
    {path: 'customer', component: CustomerComponent, 
      children:[
    
        {path:'customer-search/:id', component: CustomerSearchDeatilsComponent}
      ]
    },
    
  ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
