import {AfterViewInit, Component, EventEmitter, Input, Output, ViewChild, ViewEncapsulation} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { UserenvironmentsService } from 'src/app/userenvironments.service';
import {PageEvent} from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';


export interface PeriodicElement {
  Policy:string
  Name: string;
  Addresss: string;
  Contact: string;
  Executive: string;
  Representtive:string
}



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  encapsulation: ViewEncapsulation.None
})


export class TableComponent {

  @Output() shareCheckedList = new EventEmitter();
  dataSource!: MatTableDataSource<PeriodicElement>
  displayedColumns:any;  
  @ViewChild(MatPaginator) private paginator!: MatPaginator;
  customername:any

  data={
    SearchText: "",
    SearchType: "Policy",
    SearchFilter1: "Active",
    SearchFilter2: "Customer",
    SearchFilter3: ["FirstName","LastName"],
    SearchFilter4: "X-Reference",
    SearchFilter5: "Agency",
    Skip: 0,
    Take: 10
  }
  constructor(private userEnvironments: UserenvironmentsService    ) { }

  customerdata1:any
  search=""
  Filter3Selected=["select"]
  Filter3=["select","select1","select2"]
  length = 0;
  pageSize = 0;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];
  token:any
  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;
  schema:any
  pageEvent!: PageEvent;
  selcted:any
  SelectedHeaders:any
  manualPage=0

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.manualPage = e.pageIndex+1;
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

  ngOnInit(){

    this.selcted=[]
    this.token = localStorage.getItem('Token');
    this.userEnvironments.getSchema(this.token).subscribe(response => {
      this.schema = response
      this.SelectedHeaders=this.schema.TableSchema.HeadersSelected
      this.displayedColumns= this.schema.TableSchema.HeadersSelected; 
      this.data={
        SearchText: "",
        SearchType: this.schema.Filter1Selected[0],
        SearchFilter1: this.schema.Filter2Selected[0],
        SearchFilter2: this.schema.Filter3Selected[0],
        SearchFilter3: this.schema.Filter4Selected,
        SearchFilter4: this.schema.Filter5Selected[0],
        SearchFilter5: this.schema.Filter6Selected[0],
        Skip: 0,
        Take: 10
      }
      for(let i=0;i<this.schema.AvailableFilters.length;i++){
      this.selcted[i]=this.schema[this.schema.AvailableFilters[i]+'Selected'][0]
      }
    })
  }

  getValues(value:any,filter:any){
    this.selcted[filter]=value
  }

  
  callapi()
  {
    this.customerdata1=[]
    if(this.search!=""){
    this.data.SearchText=this.search
    this.userEnvironments.getsearchcustomer(this.data, this.token).subscribe(response => {
      this.customerdata1 = response;
      this.dataSource = new MatTableDataSource(this.customerdata1.data);
      this.dataSource.paginator = this.paginator;
    })}
    else
    this.dataSource = new MatTableDataSource(this.customerdata1.data);
  }

  shareCheckedLis(item:any){
        this.displayedColumns=item
        this.callapi()
  }

  onClick(event:any, cuid:any){
    this.customername = event.target.firstChild;
    this.shareCheckedList.emit(cuid);
  }
  public updateManualPage(index: number): void {
    this.manualPage = index-1;
    this.paginator.pageIndex = index-1;
    this.paginator.page.next({
      pageIndex: this.paginator.pageIndex,
      pageSize: this.paginator.pageSize,
      length: this.paginator.length
    });
  }
  public clearManualPage(): void {
    this.manualPage = this.pageIndex+1;
  }

}
