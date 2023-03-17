export interface Flight{
    id : number;
    flightNumber : string;
    origin : string;
    destination : string;
    departureTime : Date;
    arrivalTime : Date;
    seatsAvailable: number;
    seatCost : number;
}