import { Observer } from "./observer";

export class EventEmitter<T> {
  private observers: Map<string, Set<Observer<T>>> = new Map();

  subscribe(event: string, observer: Observer<T>): void {
    if (!this.observers.has(event)) this.observers.set(event, new Set());
    this.observers.get(event)!.add(observer);
    console.log(`  [EventEmitter] ${(observer as any).name ?? "observer"} subscribed to "${event}"`);
  }

  unsubscribe(event: string, observer: Observer<T>): void {
    this.observers.get(event)?.delete(observer);
  }

  protected emit(event: string, data: T): void {
    const handlers = this.observers.get(event);
    if (!handlers || handlers.size === 0) return;
    handlers.forEach(obs => obs.update(event, data));
  }
}