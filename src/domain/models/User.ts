export class User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  isPremium: boolean;

  constructor(user: CreateUserDto) {
    this.id = user.id;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.email = user.email;
    this.password = user.password;
    this.phone = user.phone;
    this.isPremium = false;
  }
}

export interface CreateUserDto {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
  }
  
