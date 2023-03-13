import { Component, Input, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserenvironmentsService } from 'src/app/userenvironments.service';
import { PeriodicElement } from '../../table/table.component';
import {MatPaginator} from '@angular/material/paginator';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css']
})


export class PolicyComponent {
  
  @ViewChild(MatPaginator) private paginator!: MatPaginator;
  date:any
  date1:any
  date2:any
  day!:number
  Day!:number
  month!:number
  Month!:number
  year!:number
  Year!:number
  timestamp1:any
  timestamp2:any
  campaignTwo:any
  event:any
  length =0;
  @Input() routerId: any;
  @Input() customerId:any
  openOverlay=false;
  selected = 'option2';
  Filter3Selected:any
  Filter3:any
  customerTableData:any;
  dataSource!: MatTableDataSource<PeriodicElement>
  displayedColumns:string[]= ['Policy', 'Insurer', 'Description', 'Cost / Billed','Term','Status', ' '];
  constructor(private service: UserenvironmentsService){}

  ngOnInit(){
    var token = localStorage.getItem('Token')
    this.service.getcustomertable1(token, this.customerId).subscribe(response =>{
      this.customerTableData = response;
      this.Filter3 = this.customerTableData[0].FilterByPolicy;
      this.Filter3Selected = this.customerTableData[0].FilterByPolicySelected;
      this.date = this.customerTableData[0].FilterDuration;
      this.date = this.date.split(' - ');
      this.date1 = this.date[0];
      this.date2 = this.date[1];
      this.timestamp1 = new Date(this.date1).getTime()
      this.day = new Date(this.timestamp1).getDate()
      this.month = new Date(this.timestamp1).getMonth()+1;
      this.year = new Date(this.timestamp1).getFullYear()
      this.timestamp2 = new Date(this.date2).getTime()
      this.Day = new Date(this.timestamp2).getDate()
      this.Month = new Date(this.timestamp2).getMonth()+1;
      this.Year = new Date(this.timestamp2).getFullYear()
  
      this.customerTableData = this.customerTableData[0].data;
      this.dataSource=this.customerTableData;
      this.date = this.customerTableData.FilterDuration;
      this.dataSource.paginator = this.paginator
      this.campaignTwo = new FormGroup({
        start: new FormControl(new Date(this.year, this.month, this.day)),
        end: new FormControl(new Date(this.Year, this.Month, this.Day)),
      });
    })
  }
  getselectedValue3(event: any) {
   // console.log("this is filter",event);
  }
  clickIcon(){
    this.openOverlay = !this.openOverlay
  }


}
