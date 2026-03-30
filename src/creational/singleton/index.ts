import { AppLogger } from "./app-logger";

// ── Simulated modules using the logger ────────────────────────────────────
function moduleA(): void {
  const logger = AppLogger.getInstance();
  logger.log("INFO", "Module A initialized");
  logger.log("WARN", "Module A: config value missing, using default");
}

function moduleB(): void {
  const logger = AppLogger.getInstance();
  logger.log("INFO", "Module B started");
  logger.log("ERROR", "Module B: connection failed, retrying...");
}

// ── Demo ───────────────────────────────────────────────────────────────────
export function runSingleton(): void {
  console.log("\n=== Singleton ===");
  console.log("Problem: share one logger instance across the entire application.\n");

  moduleA();
  moduleB();

  const logger = AppLogger.getInstance();
  console.log(`\n  Total log entries: ${logger.getCallCount()}`);
  console.log(`  Same instance? ${AppLogger.getInstance() === AppLogger.getInstance() ? "✅ yes" : "❌ no"}`);
}

runSingleton();