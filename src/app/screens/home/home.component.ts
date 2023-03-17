import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Flight } from 'src/app/models/flight.model';
import { FlightsService } from 'src/app/services/flights/flights.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  displayedColumns: string[] = ['flightNumber', 'origin', 'departureTime','icon', 'arrivalTime','destination','seatCost'];
  dataSource : any;

  constructor(private flightsService : FlightsService, private router : Router){ }

  ngOnInit() : void {
    this.flightsService.getAllFlights()
      .subscribe({
        next:(flights) => {
          this.dataSource = flights
        },
        error:(response) => {
          console.log(response)
        }
      })
  }

  addCustomerDetails(flight : Flight){
    this.router.navigate(['customer-details', flight.id])
  }
}