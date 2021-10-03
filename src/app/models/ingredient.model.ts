export class Ingredient {
  name!: string;
  description!: string;
  halal!: boolean;

  constructor(name: string, description: string, halal: boolean) {
    this.name = name;
    this.description = description;
    this.halal = halal;
  }
}
