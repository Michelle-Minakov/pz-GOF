import { Observer } from "./observer";
import { StockTick } from "./stock-tick";

export class AuditLogObserver implements Observer<StockTick> {
  readonly name = "AuditLog";
  update(event: string, data: StockTick): void {
    console.log(`  📋 [AuditLog] event="${event}" symbol=${data.symbol} price=${data.price}`);
  }
}