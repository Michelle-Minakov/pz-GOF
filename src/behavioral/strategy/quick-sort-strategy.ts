import { SortStrategy } from "./sort-strategy";

export class QuickSortStrategy implements SortStrategy {
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