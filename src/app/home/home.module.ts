import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { DashComponent } from './dash/dash.component';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgChartsModule } from 'ng2-charts';
import { WorkflowsComponent } from './dash/workflows/workflows.component';
import { GraphComponent } from './dash/graph/graph.component';
import { PolicesComponent } from './dash/polices/polices.component';
import { CommissionComponent } from './dash/commission/commission.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { FiltersComponent } from './dash/filters/filters.component';
import { SearchComponent } from './dash/search/search.component';
import { ProfileComponent } from './dash/profile/profile.component';
import { CustomerComponent } from './customer/customer.component';
import { MatTableModule } from '@angular/material/table';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatBadgeModule} from '@angular/material/badge';
import { MatPaginatorModule } from '@angular/material/paginator';
import { TableComponent } from './customer/table/table.component';
import { CustomerDataComponent } from './customer/customer-data/customer-data.component';

import { CustomerSearchDeatilsComponent } from './customer/customer-search-details/customer-search-details.component';
import { ActivitiesComponent } from './customer/customer-search-details/activities/activities.component';
import { LimitsCoverageComponent } from './customer/customer-search-details/limits-coverage/limits-coverage.component';
import { IntelligenceComponent } from './customer/customer-search-details/intelligence/intelligence.component';
import { ClaimsComponent } from './customer/customer-search-details/claims/claims.component';
import { CustomerPersonalDetailsComponent } from './customer/customer-search-details/customer-personal-details/customer-personal-details.component';
import { CustomerListComponent } from './customer/customer-search-details/customer-list/customer-list.component';
import { PolicyComponent } from './customer/customer-search-details/policy/policy.component';
import { TasksComponent } from './dash/tasks/tasks.component';
import { TasksListComponent } from './customer/customer-search-details/tasks-list/tasks-list.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    HomeComponent,
    DashComponent,
    WorkflowsComponent,
    TasksComponent,
    GraphComponent,
    PolicesComponent,
    CommissionComponent,
    DialogComponent,
    FiltersComponent,
    SearchComponent,
    ProfileComponent,
    CustomerComponent,
    TableComponent,
    CustomerSearchDeatilsComponent,
    CustomerDataComponent,
    ActivitiesComponent, 
    LimitsCoverageComponent, 
    IntelligenceComponent, 
    ClaimsComponent, 
    CustomerPersonalDetailsComponent, 
    CustomerListComponent, PolicyComponent, TasksListComponent,
    
  
  ],
  imports: [
    CommonModule,
    HomeRoutingModule, MatIconModule, MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    NgChartsModule,
    MatTableModule,
    MatTooltipModule,
    MatBadgeModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule
    ]
})
export class HomeModule { }
