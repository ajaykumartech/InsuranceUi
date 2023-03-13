import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {
  constructor (private route : Router) {}
  routerId:any;
  href:any;
  @Input() customerID:any
  custId :any;
  istab = false
  buttonClick(id:any){
    this.routerId = id;
    this.istab = !this.istab
  }

  ngOnInit(){
    this.href = this.route.url;
  }
  
  
}
