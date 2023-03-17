import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  baseUrl : string = 'http://localhost:8201/customers'
  constructor(private http: HttpClient) { }

  createCustomer(customer : Customer){
    return this.http.post<Customer>(this.baseUrl, customer);
  }
}
