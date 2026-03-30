import { StockMarket } from "./stock-market";
import { PriceAlertObserver } from "./price-alert-observer";
import { PortfolioObserver } from "./portfolio-observer";
import { NewsFeedObserver } from "./news-feed-observer";
import { AuditLogObserver } from "./audit-log-observer";

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

  console.log("  ________*****************_____________________");
  const news = new NewsFeedObserver();
  market.subscribe("tick", news);
   console.log("  ________*****************_____________________");

  market.updatePrice("AAPL", 182.50);
  market.updatePrice("AAPL", 175.00);  // big drop — should trigger alert
  market.updatePrice("GOOG", 140.00);  // not in portfolio

  console.log("\n  — Unsubscribing audit log...");
  market.unsubscribe("tick", audit);
  console.log("  — Unsubscribing portfolio observer...");
  market.unsubscribe("tick", portfolio);
  market.updatePrice("TSLA", 250.00);

  console.log("\n✅ Adding/removing observers never changes StockMarket. Loose coupling.");
}

runObserver();