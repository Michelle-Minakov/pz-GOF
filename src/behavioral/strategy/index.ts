/**
 * STRATEGY — Behavioral Pattern
 *
 * Problem: Define a family of algorithms, encapsulate each one,
 * and make them interchangeable. Strategy lets the algorithm vary
 * independently from clients that use it.
 *
 * Anti-example: one giant Sorter class with a switch/if-else
 * block — adding a new algorithm requires modifying the class,
 * violating Open/Closed Principle.
 */

// ── Strategy interface ─────────────────────────────────────────────────────
interface SortStrategy {
  readonly name: string;
  sort(data: number[]): number[];
}

// ── Concrete Strategies ────────────────────────────────────────────────────
class BubbleSortStrategy implements SortStrategy {
  readonly name = "Bubble Sort";

  sort(data: number[]): number[] {
    const arr = [...data];
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    return arr;
  }
}

class QuickSortStrategy implements SortStrategy {
  readonly name = "Quick Sort";

  sort(data: number[]): number[] {
    if (data.length <= 1) return data;
    const pivot = data[Math.floor(data.length / 2)];
    const left = data.filter(x => x < pivot);
    const middle = data.filter(x => x === pivot);
    const right = data.filter(x => x > pivot);
    return [...this.sort(left), ...middle, ...this.sort(right)];
  }
}

class MergeSortStrategy implements SortStrategy {
  readonly name = "Merge Sort";

  sort(data: number[]): number[] {
    if (data.length <= 1) return data;
    const mid = Math.floor(data.length / 2);
    const left = this.sort(data.slice(0, mid));
    const right = this.sort(data.slice(mid));
    return this.merge(left, right);
  }

  private merge(a: number[], b: number[]): number[] {
    const result: number[] = [];
    let i = 0, j = 0;
    while (i < a.length && j < b.length) {
      result.push(a[i] <= b[j] ? a[i++] : b[j++]);
    }
    return [...result, ...a.slice(i), ...b.slice(j)];
  }
}

// ── Context ────────────────────────────────────────────────────────────────
class DataSorter {
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

  console.log("\n✅ New sort algorithm = new class implementing SortStrategy. Context unchanged.");
}

runStrategy();