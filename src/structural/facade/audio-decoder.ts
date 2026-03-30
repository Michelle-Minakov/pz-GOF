export class AudioDecoder {
  initialize(sampleRate: number): void {
    console.log(`  [AudioDecoder] init @ ${sampleRate}Hz`);
  }
  decode(): void { console.log("  [AudioDecoder] decoding audio stream"); }
  release(): void { console.log("  [AudioDecoder] releasing audio buffer"); }
}