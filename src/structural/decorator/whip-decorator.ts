import { CoffeeDecorator } from "./coffee-decorator";

export class WhipDecorator extends CoffeeDecorator {
  getDescription(): string { return `${this.wrapped.getDescription()}, whipped cream`; }
  getCost(): number { return this.wrapped.getCost() + 8; }
}