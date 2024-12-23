export class Rating {
  companyId: string;
  userId: string;
  rating: number;
  comment: string;
  date: number;

  constructor(rating: CreateRatingDto) {
    this.companyId = rating.companyId;
    this.userId = rating.userId;
    this.rating = rating.rating;
    this.comment = rating.comment;
    this.date = Date.now();
  }
}

export interface CreateRatingDto {
  companyId: string;
  userId: string;
  rating: number;
  comment: string;
}
