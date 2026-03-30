import { CoffeeDecorator } from "./coffee-decorator";

export class SugarDecorator extends CoffeeDecorator {
  getDescription(): string { return `${this.wrapped.getDescription()}, sugar`; }
  getCost(): number { return this.wrapped.getCost() + 2; }
}