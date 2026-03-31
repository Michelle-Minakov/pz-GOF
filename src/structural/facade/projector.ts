export class Projector {
  on(): void {
    console.log("  [Projector] on");
  }

  off(): void {
    console.log("  [Projector] off");
  }

  setInput(input: string): void {
    console.log(`  [Projector] set input to ${input}`);
  }

  wideScreenMode(): void {
    console.log("  [Projector] set widescreen mode");
  }
}
