export class Company {
  id: string;
  name: string;
  description: string;
  logo: string;
  SIRET: string;
  mail: string;
  phone: string;
  password: string;
  isCertified: boolean;
  isPremium: boolean;

  constructor(company: CreateCompanyDto) {
    this.id = company.id;
    this.name = company.name;
    this.description = company.description;
    this.logo = company.logo;
    this.SIRET = company.SIRET;
    this.mail = company.mail;
    this.phone = company.phone;
    this.password = company.password;
    this.isCertified = false;
    this.isPremium = false;
  }
}

export interface CreateCompanyDto {
  id: string;
  name: string;
  description: string;
  logo: string;
  SIRET: string;
  mail: string;
  phone: string;
  password: string;
}
