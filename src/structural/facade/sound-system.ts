export class SoundSystem {
  on(): void {
    console.log("  [SoundSystem] on");
  }

  off(): void {
    console.log("  [SoundSystem] off");
  }

  setVolume(value: number): void {
    console.log(`  [SoundSystem] set volume to ${value}`);
  }
}
