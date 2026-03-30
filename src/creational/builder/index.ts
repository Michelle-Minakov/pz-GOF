import { CustomPizzaBuilder } from "./custom-pizza-builder";
import { PizzaDirector } from "./pizza-director";

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