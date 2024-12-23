import { Location } from "./Location";

export class Reservation {
  userId: string;
  companyId: string;
  sportId: string;
  price: number;
  isValidateByCompany: boolean;
  isValidateByUser: boolean;
  location: Location;
  isCanceled: boolean;
  date: number;

  constructor(reservation: CreateReservationDto) {
    this.userId = reservation.userId;
    this.companyId = reservation.companyId;
    this.sportId = reservation.sportId;
    this.price = reservation.price;
    this.isValidateByCompany = reservation.isValidateByCompany;
    this.isValidateByUser = reservation.isValidateByUser;
    this.location = reservation.location;
    this.isCanceled = reservation.isCanceled;
    this.date = Date.now();
  }
}

export interface CreateReservationDto {
  userId: string;
  companyId: string;
  sportId: string;
  price: number;
  isValidateByCompany: boolean;
  isValidateByUser: boolean;
  location: Location;
  isCanceled: boolean;
}
