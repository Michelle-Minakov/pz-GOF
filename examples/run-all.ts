import { runFactoryMethod } from "../src/creational/factory-method/index";
import { runBuilder } from "../src/creational/builder/index";
import { runSingleton } from "../src/creational/singleton/index";
import { runAdapter } from "../src/structural/adapter/index";
import { runFacade } from "../src/structural/facade/index";
import { runDecorator } from "../src/structural/decorator/index";
import { runStrategy } from "../src/behavioral/strategy/index";
import { runObserver } from "../src/behavioral/observer/index";

console.log("╔══════════════════════════════════════════════════╗");
console.log("║         GoF Design Patterns — TypeScript         ║");
console.log("╠══════════════════════════════════════════════════╣");
console.log("║  CREATIONAL: Factory Method · Builder · Singleton ║");
console.log("║  STRUCTURAL: Adapter · Facade · Decorator         ║");
console.log("║  BEHAVIORAL: Strategy · Observer                  ║");
console.log("╚══════════════════════════════════════════════════╝");

// ── Creational ─────────────────────────────────────────────────────────────
console.log("\n\n━━━━━━━━━━━━━━━━━━  CREATIONAL  ━━━━━━━━━━━━━━━━━━");
runFactoryMethod();
runBuilder();
runSingleton();

// ── Structural ─────────────────────────────────────────────────────────────
console.log("\n\n━━━━━━━━━━━━━━━━━━  STRUCTURAL  ━━━━━━━━━━━━━━━━━━");
runAdapter();
runFacade();
runDecorator();

// ── Behavioral ─────────────────────────────────────────────────────────────
console.log("\n\n━━━━━━━━━━━━━━━━━━  BEHAVIORAL  ━━━━━━━━━━━━━━━━━━");
runStrategy();
runObserver();

console.log("\n\n✅  All patterns executed successfully.");