import { Observer } from "./observer";
import { StockTick } from "./stock-tick";

export class PriceAlertObserver implements Observer<StockTick> {
  readonly name = "PriceAlert";
  constructor(private threshold: number) {}

  update(_event: string, data: StockTick): void {
    if (Math.abs(data.change) >= this.threshold) {
      console.log(`  🚨 [PriceAlert] ${data.symbol} moved ${data.change >= 0 ? "+" : ""}${data.change.toFixed(2)} — ALERT threshold hit!`);
    }
  }
}