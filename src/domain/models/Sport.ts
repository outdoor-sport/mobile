export class Sport {
  id: string;
  name: string;
  sportCategoryId: string;

  constructor(id: string, name: string, sportCategoryId: string) {
    this.id = id;
    this.name = name;
    this.sportCategoryId = sportCategoryId;
  }
}
