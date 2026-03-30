export class VideoDecoder {
  loadFile(path: string): void { console.log(`  [VideoDecoder] loading ${path}`); }
  decode(): void { console.log("  [VideoDecoder] decoding video stream"); }
  release(): void { console.log("  [VideoDecoder] releasing video buffer"); }
}