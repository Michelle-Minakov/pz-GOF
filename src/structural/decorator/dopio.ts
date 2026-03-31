import { CoffeeDecorator } from "./coffee-decorator";

export class DopioDecorator extends CoffeeDecorator {
  getDescription(): string { return `${this.wrapped.getDescription()}, dopio`; }
  getCost(): number { return this.wrapped.getCost() + 20; }
}