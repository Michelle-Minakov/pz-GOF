import { PizzaBuilder } from "./pizza-builder";
import { Pizza } from "./pizza";

export class PizzaDirector {
  constructor(private builder: PizzaBuilder) {}

  makeMargherita(): Pizza {
    return this.builder
      .setSize("medium")
      .setCrust("thin")
      .setSauce("tomato")
      .addTopping("mozzarella")
      .addTopping("artichoke")
      .addTopping("basil")
      .build();
  }

  makeVeggie(): Pizza {
    return this.builder
      .setSize("large")
      .setCrust("thick")
      .setSauce("pesto")
      .addTopping("bell pepper")
      .addTopping("mushrooms")
      .addTopping("olives")
      .withExtraCheese()
      .build();
  }
}