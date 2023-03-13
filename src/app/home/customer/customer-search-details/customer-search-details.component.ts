import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserenvironmentsService } from 'src/app/userenvironments.service';

@Component({
  selector: 'app-customer-search-details',
  templateUrl: './customer-search-details.component.html',
  styleUrls: ['./customer-search-details.component.css']
})
export class CustomerSearchDeatilsComponent {
  @Input() custId:any;
  customerdetails:any
  cuid:any
 
constructor (private router: Router, private route: ActivatedRoute, private service: UserenvironmentsService){}
  ngOnInit(){
    this.route.paramMap.subscribe(params =>{
      this.cuid = params.get('id')
    })
  }
  
 
}
