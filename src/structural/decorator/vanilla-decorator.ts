import { CoffeeDecorator } from "./coffee-decorator";

export class VanillaDecorator extends CoffeeDecorator {
  getDescription(): string { return `${this.wrapped.getDescription()}, vanilla syrup`; }
  getCost(): number { return this.wrapped.getCost() + 10; }
}