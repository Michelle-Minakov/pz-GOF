export interface SortStrategy {
  readonly name: string;
  sort(data: number[]): number[];
}