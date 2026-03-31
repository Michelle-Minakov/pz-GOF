export class BluRayPlayer {
  on(): void {
    console.log("  [BluRayPlayer] on");
  }

  off(): void {
    console.log("  [BluRayPlayer] off");
  }

  play(movie: string): void {
    console.log(`  [BluRayPlayer] playing movie: ${movie}`);
  }

  stop(): void {
    console.log("  [BluRayPlayer] stop");
  }
}
