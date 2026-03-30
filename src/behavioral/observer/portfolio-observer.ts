import { Observer } from "./observer";
import { StockTick } from "./stock-tick";

export class PortfolioObserver implements Observer<StockTick> {
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