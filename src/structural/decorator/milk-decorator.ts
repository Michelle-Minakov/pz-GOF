import { CoffeeDecorator } from "./coffee-decorator";

export class MilkDecorator extends CoffeeDecorator {
  getDescription(): string { return `${this.wrapped.getDescription()}, milk`; }
  getCost(): number { return this.wrapped.getCost() + 5; }
}