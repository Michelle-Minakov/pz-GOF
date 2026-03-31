import { HomeTheaterFacade } from "./home-theater-facade";

// ── Client code uses only facade, not subsystem details ──────────────────
export function runFacade(): void {
  console.log("\n=== Facade ===");
  console.log("Problem: hide complex subsystem behind simple interface.\n");

  const homeTheater = new HomeTheaterFacade();

  homeTheater.watchMovie("Inception");
  console.log("\n  🎬 Movie is running...\n");
  homeTheater.endMovie();

  console.log("\n✅ Client code has a simple API, internals are decoupled and hidden.");
}

runFacade();
