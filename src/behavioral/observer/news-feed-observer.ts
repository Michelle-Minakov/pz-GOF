import { Observer } from "./observer";
import { StockTick } from "./stock-tick";

export class NewsFeedObserver implements Observer<StockTick> {
  readonly name = "NewsFeed";

  update(_event: string, data: StockTick): void {
    if (Math.abs(data.change) > 3) {
      console.log(`Новий користувач: [NewsFeed] ${data.symbol} had a significant change of ${data.change >= 0 ? "+" : ""}${data.change.toFixed(2)} — fetching related news...`);
    }
  }
}