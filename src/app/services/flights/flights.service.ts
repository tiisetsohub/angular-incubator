import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from 'src/app/models/flight.model';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {
  baseUrl : string = 'http://localhost:8202/flights'
  constructor(private http: HttpClient) { }

  getAllFlights(): Observable<Flight[]>{
    return this.http.get<Flight[]>(this.baseUrl);
  }
}
