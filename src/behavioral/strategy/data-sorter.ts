import { SortStrategy } from "./sort-strategy";

export class DataSorter {
  constructor(private strategy: SortStrategy) {}

  setStrategy(strategy: SortStrategy): void {
    console.log(`  🔄 Switching strategy to: ${strategy.name}`);
    this.strategy = strategy;
  }

  sort(data: number[]): number[] {
    console.log(`  ▶ Using: ${this.strategy.name}`);
    const start = Date.now();
    const result = this.strategy.sort(data);
    console.log(`  ⏱ Done in ${Date.now() - start}ms`);
    return result;
  }
}