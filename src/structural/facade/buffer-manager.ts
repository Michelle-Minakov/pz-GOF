export class BufferManager {
  allocate(mb: number): void { console.log(`  [BufferManager] allocating ${mb}MB`); }
  flush(): void { console.log("  [BufferManager] flushing buffers"); }
}