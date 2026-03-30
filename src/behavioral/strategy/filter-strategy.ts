import { SortStrategy } from "./sort-strategy";

export class FilterStrategy implements SortStrategy {
  readonly name = "Filter > 30 Sort";
  sort(data: number[]): number[] {
    console.log("  [FilterStrategy] Filtering out values <= 30, then sorting the rest.");
    return data.filter(x => x > 30).sort((a, b) => a - b);
  }
}