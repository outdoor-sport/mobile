export class CompanyLocation {
  companyId: string;
  city: string;
  street: string;
  number: number;
  zipCode: string;
  country: string;

  constructor(location: CreateLocationDto) {
    this.companyId = location.companyId;
    this.city = location.city;
    this.street = location.street;
    this.number = location.number;
    this.zipCode = location.zipCode;
    this.country = location.country;
  }
}

export interface CreateLocationDto {
  companyId: string;
  city: string;
  street: string;
  number: number;
  zipCode: string;
  country: string;
}

export interface Location {
  city: string;
  street: string;
  number: number;
  zipCode: string;
  country: string;
}
