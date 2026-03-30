import { Coffee } from "./coffee";
import { SimpleCoffee } from "./simple-coffee";
import { MilkDecorator } from "./milk-decorator";
import { SugarDecorator } from "./sugar-decorator";
import { VanillaDecorator } from "./vanilla-decorator";
import { WhipDecorator } from "./whip-decorator";

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