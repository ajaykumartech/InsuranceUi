import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSearchDeatilsComponent } from './customer-search-details.component';

describe('CustomerSearchDeatilsComponent', () => {
  let component: CustomerSearchDeatilsComponent;
  let fixture: ComponentFixture<CustomerSearchDeatilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerSearchDeatilsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerSearchDeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
