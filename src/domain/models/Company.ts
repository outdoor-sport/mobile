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

    if (!this.isSIRETValid) {
      throw new Error("SIRET is not valid");
    }
  }

  get isSIRETValid(): boolean {
    if (this.SIRET.length !== 14) {
      return false;
    }

    let verif = 0;

    for (const char of this.SIRET) {
      const num = parseInt(char);
      if (num % 2 === 0) {
        verif += num * 2;
      } else {
        verif += num;
      }
    }

    return verif % 10 === 0;
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
