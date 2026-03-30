import { Coffee } from "./coffee";

export class SimpleCoffee implements Coffee {
  getDescription(): string { return "Black coffee"; }
  getCost(): number { return 20; }
}