import { LogLevel } from "./log-level";

export class AppLogger {
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