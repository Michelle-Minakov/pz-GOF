import { PizzaBuilder } from "./pizza-builder";
import { Pizza } from "./pizza";

export class CustomPizzaBuilder implements PizzaBuilder {
  private pizza = new Pizza();

  setSize(size: string): this {
    this.pizza.size = size;
    return this;
  }
  setCrust(crust: string): this {
    this.pizza.crust = crust;
    return this;
  }
  setSauce(sauce: string): this {
    this.pizza.sauce = sauce;
    return this;
  }
  addTopping(topping: string): this {
    this.pizza.toppings.push(topping);
    return this;
  }
  withExtraCheese(): this {
    this.pizza.extraCheese = true;
    return this;
  }
  setDeliveryNotes(notes: string): this {
    this.pizza.deliveryNotes = notes;
    return this;
  }
  build(): Pizza {
    const result = this.pizza;
    this.pizza = new Pizza(); // reset for reuse
    return result;
  }
}