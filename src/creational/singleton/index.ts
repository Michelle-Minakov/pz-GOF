/**
 * SINGLETON — Creational Pattern
 *
 * Problem: Ensure a class has only one instance and provide a global
 * access point to it. Useful for shared resources: config, logger,
 * connection pool, cache.
 *
 * Anti-example: creating multiple logger instances leads to
 * interleaved output, duplicated resources, inconsistent state.
 */

// ── Singleton class ────────────────────────────────────────────────────────
type LogLevel = "INFO" | "WARN" | "ERROR";

class AppLogger {
  private static instance: AppLogger | null = null;
  private logs: string[] = [];
  private callCount = 0;

  // Private constructor prevents direct instantiation
  private constructor() {
    console.log("  [AppLogger] instance created (should appear only once)");
  }

  static getInstance(): AppLogger {
    if (!AppLogger.instance) {
      AppLogger.instance = new AppLogger();
    }
    return AppLogger.instance;
  }

  log(level: LogLevel, message: string): void {
    this.callCount++;
    const entry = `[${level}] #${this.callCount} ${message}`;
    this.logs.push(entry);
    console.log(`  ${entry}`);
  }

  getLogs(): string[] {
    return [...this.logs];
  }

  getCallCount(): number {
    return this.callCount;
  }
}

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