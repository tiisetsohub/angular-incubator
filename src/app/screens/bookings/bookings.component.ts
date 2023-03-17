import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BookingsService } from 'src/app/services/bookings/bookings.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent {
  displayedColumns: string[] = ['referenceNumber', 'customerId', 'flightId','bookingDate'];
  dataSource : any;

  constructor(private bookingsService : BookingsService){ }

  ngOnInit() : void {
    this.bookingsService.getAllBookings()
      .subscribe({
        next:(bookings) => {
          this.dataSource = bookings
        },
        error:(response) => {
          console.log(response)
        }
      })
  }
}
