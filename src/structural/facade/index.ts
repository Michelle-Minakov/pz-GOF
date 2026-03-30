import { MediaPlayerFacade } from "./media-player-facade";

// ── Demo ───────────────────────────────────────────────────────────────────
export function runFacade(): void {
  console.log("\n=== Facade ===");
  console.log("Problem: playing a video requires 5+ subsystems. Facade hides that complexity.\n");

  const player = new MediaPlayerFacade();

  player.play("movie.mkv", { subtitleLang: "uk", bufferMb: 128 });
  console.log();
  player.stop();

  console.log("\n✅ Client code is 2 lines. Subsystem can be swapped without touching clients.");
}

runFacade();