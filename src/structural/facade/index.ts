/**
 * FACADE — Structural Pattern
 *
 * Problem: Provide a simplified interface to a complex subsystem.
 * Clients interact with the facade instead of the many subsystem classes.
 *
 * Anti-example: client code must directly call AudioDecoder, VideoDecoder,
 * BufferManager, SubtitleParser, CodecRegistry, etc. — tightly coupled,
 * impossible to swap the media engine.
 */

// ── Complex subsystem classes ──────────────────────────────────────────────
class VideoDecoder {
  loadFile(path: string): void { console.log(`  [VideoDecoder] loading ${path}`); }
  decode(): void { console.log("  [VideoDecoder] decoding video stream"); }
  release(): void { console.log("  [VideoDecoder] releasing video buffer"); }
}

class AudioDecoder {
  initialize(sampleRate: number): void {
    console.log(`  [AudioDecoder] init @ ${sampleRate}Hz`);
  }
  decode(): void { console.log("  [AudioDecoder] decoding audio stream"); }
  release(): void { console.log("  [AudioDecoder] releasing audio buffer"); }
}

class SubtitleParser {
  parse(lang: string): void { console.log(`  [SubtitleParser] parsing ${lang} subtitles`); }
}

class BufferManager {
  allocate(mb: number): void { console.log(`  [BufferManager] allocating ${mb}MB`); }
  flush(): void { console.log("  [BufferManager] flushing buffers"); }
}

class DisplayRenderer {
  render(): void { console.log("  [DisplayRenderer] rendering frame to screen"); }
}

// ── Facade ─────────────────────────────────────────────────────────────────
interface PlaybackOptions {
  subtitleLang?: string;
  audioSampleRate?: number;
  bufferMb?: number;
}

class MediaPlayerFacade {
  private video = new VideoDecoder();
  private audio = new AudioDecoder();
  private subtitles = new SubtitleParser();
  private buffer = new BufferManager();
  private display = new DisplayRenderer();

  play(filePath: string, opts: PlaybackOptions = {}): void {
    const { subtitleLang = "en", audioSampleRate = 44100, bufferMb = 64 } = opts;

    console.log(`  🎬 Starting playback: ${filePath}`);
    this.buffer.allocate(bufferMb);
    this.video.loadFile(filePath);
    this.audio.initialize(audioSampleRate);
    this.subtitles.parse(subtitleLang);
    this.video.decode();
    this.audio.decode();
    this.display.render();
    console.log("  ▶️  Playing!");
  }

  stop(): void {
    console.log("  ⏹️  Stopping playback...");
    this.video.release();
    this.audio.release();
    this.buffer.flush();
  }
}

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