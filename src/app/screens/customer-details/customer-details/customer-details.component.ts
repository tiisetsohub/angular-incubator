import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingsService } from 'src/app/services/bookings/bookings.service';
import { CustomersService } from 'src/app/services/customers/customers.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent {
  customerId : number = 0;
  flightId : number = 0;
  firstName = '';
  lastName = '';
  email = '';
  passportNumber = '';
  phoneNumber = '';
  username = '';


  constructor(private customersService : CustomersService, private bookingsService : BookingsService, private router : Router, private route : ActivatedRoute){ }

  ngOnInit(): void {
    this.flightId = Number(this.route.snapshot.paramMap.get('id'))
    console.log(this.flightId)
  }

  setFirstName(event : any){
    this.firstName = (event.target as HTMLInputElement).value.trim();
  }

  setPassportNumber(event : any){
    this.passportNumber = (event.target as HTMLInputElement).value.trim();
  }

  setEmail(event : any){
    this.email = (event.target as HTMLInputElement).value.trim();
  }

  setLastName(event : any){
    this.lastName = (event.target as HTMLInputElement).value.trim();
  }

  setPhoneNumber(event : any){
    this.phoneNumber = (event.target as HTMLInputElement).value.trim();
  }

  createBooking(){
    this.username = this.firstName + '.' + this.lastName;
    const customer = {
      id : 0,
      username : this.username,
      firstName : this.firstName,
      lastName : this.lastName,
      passportNumber : this.passportNumber,
      email : this.email,
      phoneNumber : this.phoneNumber
    }

    this.customersService.createCustomer(customer)
      .subscribe({
        next:(customer) => {
          this.customerId = customer.id
          const booking = {
            id: 0,
            customerId: this.customerId,
            flightId: this.flightId,
            bookingDate: new Date(),
            referenceNumber: "ABC123"
          }
          
          this.bookingsService.createBooking(booking)
            .subscribe({
              next:(booking) => {
                console.log(booking)
                this.router.navigate(['bookings'])
              },
              error:(response) => {
                console.log(response)
              }
            })

      
        },
        error:(response) => {
          console.log(response)
        }
    });

    
  }
}
