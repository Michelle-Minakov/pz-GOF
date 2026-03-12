/**
 * BUILDER — Creational Pattern
 *
 * Problem: Constructing complex objects step-by-step, separating
 * construction logic from the representation. Avoids telescoping
 * constructors with many optional parameters.
 *
 * Anti-example:
 *   new Pizza("large", "thin", true, false, true, true, false)
 *   — unreadable, error-prone, hard to maintain.
 */

// ── Product ────────────────────────────────────────────────────────────────
class Pizza {
  public size!: string;
  public crust!: string;
  public sauce!: string;
  public toppings: string[] = [];
  public extraCheese: boolean = false;
  public deliveryNotes?: string;

  toString(): string {
    return [
      `  🍕 Pizza [${this.size}]`,
      `     Crust : ${this.crust}`,
      `     Sauce : ${this.sauce}`,
      `     Tops  : ${this.toppings.join(", ") || "none"}`,
      `     Extra cheese: ${this.extraCheese ? "yes" : "no"}`,
      this.deliveryNotes ? `     Notes : ${this.deliveryNotes}` : "",
    ].filter(Boolean).join("\n");
  }
}

// ── Builder interface ──────────────────────────────────────────────────────
interface PizzaBuilder {
  setSize(size: string): this;
  setCrust(crust: string): this;
  setSauce(sauce: string): this;
  addTopping(topping: string): this;
  withExtraCheese(): this;
  setDeliveryNotes(notes: string): this;
  build(): Pizza;
}

// ── Concrete Builder ───────────────────────────────────────────────────────
class CustomPizzaBuilder implements PizzaBuilder {
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

// ── Director (optional) ────────────────────────────────────────────────────
class PizzaDirector {
  constructor(private builder: PizzaBuilder) {}

  makeMargherita(): Pizza {
    return this.builder
      .setSize("medium")
      .setCrust("thin")
      .setSauce("tomato")
      .addTopping("mozzarella")
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

// ── Demo ───────────────────────────────────────────────────────────────────
export function runBuilder(): void {
  console.log("\n=== Builder ===");
  console.log("Problem: construct complex objects step-by-step with a readable fluent API.\n");

  const builder = new CustomPizzaBuilder();
  const director = new PizzaDirector(builder);

  console.log("  — Standard Margherita (via Director):");
  console.log(director.makeMargherita().toString());

  console.log("\n  — Custom pizza (direct fluent API):");
  const custom = builder
    .setSize("XL")
    .setCrust("stuffed")
    .setSauce("bbq")
    .addTopping("chicken")
    .addTopping("red onion")
    .withExtraCheese()
    .setDeliveryNotes("Ring bell twice")
    .build();
  console.log(custom.toString());

  console.log("\n✅ Each pizza is built with only the properties it needs — no null/undefined soup.");
}

runBuilder();