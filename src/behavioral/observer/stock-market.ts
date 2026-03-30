import { EventEmitter } from "./event-emitter";
import { StockTick } from "./stock-tick";

export class StockMarket extends EventEmitter<StockTick> {
  private prices: Map<string, number> = new Map();

  updatePrice(symbol: string, price: number): void {
    const prev = this.prices.get(symbol) ?? price;
    const change = price - prev;
    this.prices.set(symbol, price);
    console.log(`\n  📈 Market update: ${symbol} = $${price} (${change >= 0 ? "+" : ""}${change.toFixed(2)})`);
    this.emit("tick", { symbol, price, change });
  }
}