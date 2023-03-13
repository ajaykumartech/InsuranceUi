import { Component, Input } from '@angular/core';
import { UserenvironmentsService } from 'src/app/userenvironments.service';

@Component({
  selector: 'app-customer-personal-details',
  templateUrl: './customer-personal-details.component.html',
  styleUrls: ['./customer-personal-details.component.css']
})
export class CustomerPersonalDetailsComponent {
@Input() customerId:any
personalData:any;


  constructor(private service:UserenvironmentsService){}
  ngOnInit(){

    var token = localStorage.getItem('Token')
    this.service.getcustomerDetails(this.customerId, token).subscribe(response=>{
      this.personalData = response;
    })
  }
}

