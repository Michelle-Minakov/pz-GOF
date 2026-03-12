/**
 * OBSERVER — Behavioral Pattern
 *
 * Problem: Define a one-to-many dependency between objects so that when
 * one object (Subject) changes state, all its dependents (Observers)
 * are notified automatically.
 *
 * Anti-example: Subject directly calls methods on concrete observers —
 * tightly coupled, impossible to add/remove observers without modifying
 * the Subject.
 */

// ── Observer interface ─────────────────────────────────────────────────────
interface Observer<T> {
  update(event: string, data: T): void;
}

// ── Subject (Observable) ───────────────────────────────────────────────────
class EventEmitter<T> {
  private observers: Map<string, Set<Observer<T>>> = new Map();

  subscribe(event: string, observer: Observer<T>): void {
    if (!this.observers.has(event)) this.observers.set(event, new Set());
    this.observers.get(event)!.add(observer);
    console.log(`  [EventEmitter] ${(observer as any).name ?? "observer"} subscribed to "${event}"`);
  }

  unsubscribe(event: string, observer: Observer<T>): void {
    this.observers.get(event)?.delete(observer);
  }

  protected emit(event: string, data: T): void {
    const handlers = this.observers.get(event);
    if (!handlers || handlers.size === 0) return;
    handlers.forEach(obs => obs.update(event, data));
  }
}

// ── Domain: Stock Market ───────────────────────────────────────────────────
interface StockTick {
  symbol: string;
  price: number;
  change: number;
}

class StockMarket extends EventEmitter<StockTick> {
  private prices: Map<string, number> = new Map();

  updatePrice(symbol: string, price: number): void {
    const prev = this.prices.get(symbol) ?? price;
    const change = price - prev;
    this.prices.set(symbol, price);
    console.log(`\n  📈 Market update: ${symbol} = $${price} (${change >= 0 ? "+" : ""}${change.toFixed(2)})`);
    this.emit("tick", { symbol, price, change });
  }
}

// ── Concrete Observers ─────────────────────────────────────────────────────
class PriceAlertObserver implements Observer<StockTick> {
  readonly name = "PriceAlert";
  constructor(private threshold: number) {}

  update(_event: string, data: StockTick): void {
    if (Math.abs(data.change) >= this.threshold) {
      console.log(`  🚨 [PriceAlert] ${data.symbol} moved ${data.change >= 0 ? "+" : ""}${data.change.toFixed(2)} — ALERT threshold hit!`);
    }
  }
}

class PortfolioObserver implements Observer<StockTick> {
  readonly name = "Portfolio";
  private holdings: Map<string, number> = new Map([["AAPL", 10], ["TSLA", 5]]);

  update(_event: string, data: StockTick): void {
    const qty = this.holdings.get(data.symbol);
    if (qty !== undefined) {
      const value = qty * data.price;
      console.log(`  💼 [Portfolio] ${data.symbol} ×${qty} = $${value.toFixed(2)} (${data.change >= 0 ? "+" : ""}${(qty * data.change).toFixed(2)} today)`);
    }
  }
}

class AuditLogObserver implements Observer<StockTick> {
  readonly name = "AuditLog";
  update(event: string, data: StockTick): void {
    console.log(`  📋 [AuditLog] event="${event}" symbol=${data.symbol} price=${data.price}`);
  }
}

// ── Demo ───────────────────────────────────────────────────────────────────
export function runObserver(): void {
  console.log("\n=== Observer ===");
  console.log("Problem: multiple components need to react to stock price changes independently.\n");

  const market = new StockMarket();
  const alert = new PriceAlertObserver(5);
  const portfolio = new PortfolioObserver();
  const audit = new AuditLogObserver();

  market.subscribe("tick", alert);
  market.subscribe("tick", portfolio);
  market.subscribe("tick", audit);

  market.updatePrice("AAPL", 182.50);
  market.updatePrice("AAPL", 175.00);  // big drop — should trigger alert
  market.updatePrice("GOOG", 140.00);  // not in portfolio

  console.log("\n  — Unsubscribing audit log...");
  market.unsubscribe("tick", audit);
  market.updatePrice("TSLA", 250.00);

  console.log("\n✅ Adding/removing observers never changes StockMarket. Loose coupling.");
}

runObserver();