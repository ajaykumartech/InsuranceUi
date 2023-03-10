import {AfterViewInit, Component, Input, ViewChild, ViewEncapsulation} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { UserenvironmentsService } from 'src/app/userenvironments.service';
import {PageEvent} from '@angular/material/paginator';


export interface PeriodicElement {
  Policy:string
  Name: string;
  Addresss: string;
  Contact: string;
  Executive: string;
  Representtive:string
}

const ELEMENT_DATA= new MatTableDataSource<PeriodicElement>([
  //{
//   Addresss: "1234 ABC Lane, Houston, TX, 77123",
// Contact: "(123)-123-1234",
// Executive: "John Doe",
// Name: "Ralph Edwards",
// Policy: "POL001",
// Representtive: "John Doe"
// },{
//   Addresss: "1234 ABC Lane, Houston, TX, 77123",
// Contact: "(123)-123-1234",
// Executive: "John Doe",
// Name: "Ralph Edwards",
// Policy: "POL001",
// Representtive: "John Doe"
// },{
//   Addresss: "1234 ABC Lane, Houston, TX, 77123",
// Contact: "(123)-123-1234",
// Executive: "John Doe",
// Name: "Ralph Edwards",
// Policy: "POL001",
// Representtive: "John Doe"
// },{
//   Addresss: "1234 ABC Lane, Houston, TX, 77123",
// Contact: "(123)-123-1234",
// Executive: "John Doe",
// Name: "Ralph Edwards",
// Policy: "POL001",
// Representtive: "John Doe"
// },{
//   Addresss: "1234 ABC Lane, Houston, TX, 77123",
// Contact: "(123)-123-1234",
// Executive: "John Doe",
// Name: "Ralph Edwards",
// Policy: "POL001",
// Representtive: "John Doe"
// },{
//   Addresss: "1234 ABC Lane, Houston, TX, 77123",
// Contact: "(123)-123-1234",
// Executive: "John Doe",
// Name: "Ralph Edwards",
// Policy: "POL001",
// Representtive: "John Doe"
// },{
//   Addresss: "1234 ABC Lane, Houston, TX, 77123",
// Contact: "(123)-123-1234",
// Executive: "John Doe",
// Name: "Ralph Edwards",
// Policy: "POL001",
// Representtive: "John Doe"
// }
])

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  encapsulation: ViewEncapsulation.None
})


export class TableComponent  implements AfterViewInit {

  
  dataSource!: MatTableDataSource<PeriodicElement>
 displayedColumns:string[]= ['Policy', 'Name', 'Addresss', 'Contact','Executive','Representtive'];  
  @ViewChild(MatPaginator) private paginator!: MatPaginator;



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
  pageSizeOptions = [1, 10, 25];

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  pageEvent!: PageEvent;

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

  ngOnInit(){
    console.log("this is ngoninit");


    //this.callapi()
  }
  callapi()
  {
    this.customerdata1=[]
if(this.search!=""){
  var token = localStorage.getItem('Token');
this.data.SearchText=this.search
this.userEnvironments.getsearchcustomer(this.data, token).subscribe(response => {
  this.customerdata1 = response;
  //console.log(this.customerdata1);
  this.dataSource = new MatTableDataSource(this.customerdata1.data);

  this.dataSource.paginator = this.paginator;
  console.log("sgddh",this.dataSource.paginator);

})}
else
this.dataSource = new MatTableDataSource(this.customerdata1.data);
      
  }

  ngAfterViewInit(): void {
}

  // callapi()
  // {
  //   if(this.search!=""){
  //     var token = localStorage.getItem('Token');
  //     this.data.SearchText=this.search
  //     this.userEnvironments.getsearchcustomer(this.data, token).subscribe(response => {
  //       this.customerdata1 = response;
  //       console.log(this.customerdata1.data);
        
  //       this.dataSource = new MatTableDataSource<PeriodicElement>(this.customerdata1.data);
  //     })
  //   }
  //   else  this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  // }

 
getselectedValue3(event: any) {
    
  console.log("this is filter",event);
  
  }

}



















  // displayedColumns: string[] = [
  //   'Policy',
  //   'Name',
  //   'Address',
  //   'Contact',
  //   'Executive',
  //   'Representative',
    
  // ];
//   displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
//   dataSource = ELEMENT_DATA;
//   EmpData = [
//     {
//       Policy: "POL001",
//       Name: 'Ralph Edwards',
//       Address: '1234 ABC Lane, Houston, TX, 77123',
//       Contact: '(123)-123-1234',
//       Executive: 'John Doe',
//       Representative: 'John Doe',
      
//     },
//     {
//       Policy: "POL001",
//       Name: 'Ralph Edwards',
//       Address: '1234 ABC Lane, Houston, TX, 77123',
//       Contact: '(123)-123-1234',
//       Executive: 'John Doe',
//       Representative: 'John Doe',
      
//     },
//     {
//       Policy: "POL001",
//       Name: 'Ralph Edwards',
//       Address: '1234 ABC Lane, Houston, TX, 77123',
//       Contact: '(123)-123-1234',
//       Executive: 'John Doe',
//       Representative: 'John Doe',
      
//     },
//     {
//       Policy: "POL001",
//       Name: 'Ralph Edwards',
//       Address: '1234 ABC Lane, Houston, TX, 77123',
//       Contact: '(123)-123-1234',
//       Executive: 'John Doe',
//       Representative: 'John Doe',
      
//     },
//     {
//       Policy: "POL001",
//       Name: 'Ralph Edwards',
//       Address: '1234 ABC Lane, Houston, TX, 77123',
//       Contact: '(123)-123-1234',
//       Executive: 'John Doe',
//       Representative: 'John Doe',
      
//     },
//     {
//       Policy: "POL001",
//       Name: 'Ralph Edwards',
//       Address: '1234 ABC Lane, Houston, TX, 77123',
//       Contact: '(123)-123-1234',
//       Executive: 'John Doe',
//       Representative: 'John Doe',
      
//     },
//     {
//       Policy: "POL001",
//       Name: 'Ralph Edwards',
//       Address: '1234 ABC Lane, Houston, TX, 77123',
//       Contact: '(123)-123-1234',
//       Executive: 'John Doe',
//       Representative: 'John Doe',
      
//     },
//     {
//       Policy: "POL001",
//       Name: 'Ralph Edwards',
//       Address: '1234 ABC Lane, Houston, TX, 77123',
//       Contact: '(123)-123-1234',
//       Executive: 'John Doe',
//       Representative: 'John Doe',
      
//     },
//     {
//       Policy: "POL001",
//       Name: 'Ralph Edwards',
//       Address: '1234 ABC Lane, Houston, TX, 77123',
//       Contact: '(123)-123-1234',
//       Executive: 'John Doe',
//       Representative: 'John Doe',
      
//     },
//     {
//       Policy: "POL001",
//       Name: 'Ralph Edwards',
//       Address: '1234 ABC Lane, Houston, TX, 77123',
//       Contact: '(123)-123-1234',
//       Executive: 'John Doe',
//       Representative: 'John Doe',
      
//     },
//     {
//       Policy: "POL001",
//       Name: 'Ralph Edwards',
//       Address: '1234 ABC Lane, Houston, TX, 77123',
//       Contact: '(123)-123-1234',
//       Executive: 'John Doe',
//       Representative: 'John Doe',
      
//     }, {
//       Policy: "POL001",
//       Name: 'Ralph Edwards',
//       Address: '1234 ABC Lane, Houston, TX, 77123',
//       Contact: '(123)-123-1234',
//       Executive: 'John Doe',
//       Representative: 'John Doe',
      
//     }, {
//       Policy: "POL001",
//       Name: 'Ralph Edwards',
//       Address: '1234 ABC Lane, Houston, TX, 77123',
//       Contact: '(123)-123-1234',
//       Executive: 'John Doe',
//       Representative: 'John Doe',
      
//     }, {
//       Policy: "POL001",
//       Name: 'Ralph Edwards',
//       Address: '1234 ABC Lane, Houston, TX, 77123',
//       Contact: '(123)-123-1234',
//       Executive: 'John Doe',
//       Representative: 'John Doe',
      
//     },
//   ];
  
 
//   clickedRows = new Set<PeriodicElement>();
// }

