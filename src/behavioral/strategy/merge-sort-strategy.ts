import { SortStrategy } from "./sort-strategy";

export class MergeSortStrategy implements SortStrategy {
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