import { BubbleSortStrategy } from "./bubble-sort-strategy";
import { QuickSortStrategy } from "./quick-sort-strategy";
import { MergeSortStrategy } from "./merge-sort-strategy";
import { FilterStrategy } from "./filter-strategy";
import { DataSorter } from "./data-sorter";

// ── Demo ───────────────────────────────────────────────────────────────────
export function runStrategy(): void {
  console.log("\n=== Strategy ===");
  console.log("Problem: swap sorting algorithms at runtime without changing the Sorter class.\n");

  const data = [64, 34, 25, 12, 22, 11, 90, 3, 55, 78];
  console.log(`  Input:  [${data}]`);

  const sorter = new DataSorter(new BubbleSortStrategy());
  let sorted = sorter.sort(data);
  console.log(`  Output: [${sorted}]\n`);

  sorter.setStrategy(new QuickSortStrategy());
  sorted = sorter.sort(data);
  console.log(`  Output: [${sorted}]\n`);

  sorter.setStrategy(new MergeSortStrategy());
  sorted = sorter.sort(data);
  console.log(`  Output: [${sorted}]`);

  sorter.setStrategy(new FilterStrategy());
  sorted = sorter.sort(data);
  console.log(`"готово"  Output: [${sorted}]`);

  console.log("\n✅ New sort algorithm = new class implementing SortStrategy. Context unchanged.");
}

runStrategy();