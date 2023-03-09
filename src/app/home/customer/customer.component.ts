import { Component } from '@angular/core';
import { UserenvironmentsService } from 'src/app/userenvironments.service';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})


export class CustomerComponent {
  constructor(private userEnvironments: UserenvironmentsService) { }
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




  ngOnInit(): void {

    var token = localStorage.getItem('Token');
    this.data.SearchText="P"
    this.userEnvironments.getsearchcustomer(this.data, token).subscribe(response => {
      this.customerdata1 = response;
      console.log(this.customerdata1.data);
 
    })


  }


}
