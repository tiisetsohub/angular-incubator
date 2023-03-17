import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from 'src/app/models/booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {
  baseUrl : string = 'http://localhost:8205/bookings'
  constructor(private http: HttpClient) { }

  createBooking(booking : Booking){
    return this.http.post<Booking>(this.baseUrl, booking);
  }

  getAllBookings(): Observable<Booking[]>{
    return this.http.get<Booking[]>(this.baseUrl);
  }

}
