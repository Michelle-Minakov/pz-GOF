import { Projector } from "./projector";
import { SoundSystem } from "./sound-system";
import { BluRayPlayer } from "./bluray-player";

export class HomeTheaterFacade {
  constructor(
    private readonly projector = new Projector(),
    private readonly soundSystem = new SoundSystem(),
    private readonly blueRayPlayer = new BluRayPlayer()
  ) {}

  watchMovie(movie: string): void {
    console.log("  [Facade] Get ready to watch a movie...");
    this.projector.on();
    this.projector.setInput("HDMI1");
    this.projector.wideScreenMode();
    this.soundSystem.on();
    this.soundSystem.setVolume(20);
    this.blueRayPlayer.on();
    this.blueRayPlayer.play(movie);
  }

  endMovie(): void {
    console.log("  [Facade] Shutting movie experience down...");
    this.blueRayPlayer.stop();
    this.blueRayPlayer.off();
    this.soundSystem.off();
    this.projector.off();
  }
}
