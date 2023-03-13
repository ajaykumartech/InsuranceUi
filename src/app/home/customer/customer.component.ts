import { Component, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserenvironmentsService } from 'src/app/userenvironments.service';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})


export class CustomerComponent {
  
  customerId:any
  constructor(private userEnvironments: UserenvironmentsService, private route:ActivatedRoute) { }
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
  customerdata1:any
  path:any



  ngOnInit(): void {

    this.path = this.route.snapshot.paramMap.get('id');
    var token = localStorage.getItem('Token');
    this.data.SearchText="P"
    this.userEnvironments.getsearchcustomer(this.data, token).subscribe(response => {
      this.customerdata1 = response;
    })
    
  }
  customername(id:any){
    this.customerId = id
  }


}
