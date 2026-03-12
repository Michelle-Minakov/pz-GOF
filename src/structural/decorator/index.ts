/**
 * DECORATOR — Structural Pattern
 *
 * Problem: Add responsibilities to objects dynamically without
 * modifying their class. An alternative to subclassing for extending
 * functionality, allowing combinations at runtime.
 *
 * Anti-example: PlainCoffee, CoffeeWithMilk, CoffeeWithSugar,
 * CoffeeWithMilkAndSugar, CoffeeWithMilkAndSugarAndVanilla …
 * — combinatorial explosion of subclasses.
 */

// ── Component interface ────────────────────────────────────────────────────
interface Coffee {
  getDescription(): string;
  getCost(): number;
}

// ── Concrete Component ─────────────────────────────────────────────────────
class SimpleCoffee implements Coffee {
  getDescription(): string { return "Black coffee"; }
  getCost(): number { return 20; }
}

// ── Base Decorator ─────────────────────────────────────────────────────────
abstract class CoffeeDecorator implements Coffee {
  constructor(protected wrapped: Coffee) {}
  getDescription(): string { return this.wrapped.getDescription(); }
  getCost(): number { return this.wrapped.getCost(); }
}

// ── Concrete Decorators ────────────────────────────────────────────────────
class MilkDecorator extends CoffeeDecorator {
  getDescription(): string { return `${this.wrapped.getDescription()}, milk`; }
  getCost(): number { return this.wrapped.getCost() + 5; }
}

class SugarDecorator extends CoffeeDecorator {
  getDescription(): string { return `${this.wrapped.getDescription()}, sugar`; }
  getCost(): number { return this.wrapped.getCost() + 2; }
}

class VanillaDecorator extends CoffeeDecorator {
  getDescription(): string { return `${this.wrapped.getDescription()}, vanilla syrup`; }
  getCost(): number { return this.wrapped.getCost() + 10; }
}

class WhipDecorator extends CoffeeDecorator {
  getDescription(): string { return `${this.wrapped.getDescription()}, whipped cream`; }
  getCost(): number { return this.wrapped.getCost() + 8; }
}

function printOrder(coffee: Coffee): void {
  console.log(`  ☕ ${coffee.getDescription()}`);
  console.log(`     Cost: ${coffee.getCost()} UAH`);
}

// ── Demo ───────────────────────────────────────────────────────────────────
export function runDecorator(): void {
  console.log("\n=== Decorator ===");
  console.log("Problem: combine coffee add-ons freely without class explosion.\n");

  let order: Coffee = new SimpleCoffee();
  console.log("  Order 1 — plain:");
  printOrder(order);

  order = new MilkDecorator(new SugarDecorator(new SimpleCoffee()));
  console.log("\n  Order 2 — with milk + sugar:");
  printOrder(order);

  order = new WhipDecorator(new VanillaDecorator(new MilkDecorator(new SimpleCoffee())));
  console.log("\n  Order 3 — vanilla latte with whip:");
  printOrder(order);

  console.log("\n✅ Any combination = just nesting decorators. Zero new classes needed.");
}

runDecorator();