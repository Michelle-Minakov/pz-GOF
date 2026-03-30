import { Coffee } from "./coffee";

export abstract class CoffeeDecorator implements Coffee {
  constructor(protected wrapped: Coffee) {}
  getDescription(): string { return this.wrapped.getDescription(); }
  getCost(): number { return this.wrapped.getCost(); }
}