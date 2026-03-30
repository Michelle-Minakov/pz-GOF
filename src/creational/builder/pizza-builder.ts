import { Pizza } from "./pizza";

export interface PizzaBuilder {
  setSize(size: string): this;
  setCrust(crust: string): this;
  setSauce(sauce: string): this;
  addTopping(topping: string): this;
  withExtraCheese(): this;
  setDeliveryNotes(notes: string): this;
  build(): Pizza;
}