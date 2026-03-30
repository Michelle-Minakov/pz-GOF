import { VideoDecoder } from "./video-decoder";
import { AudioDecoder } from "./audio-decoder";
import { SubtitleParser } from "./subtitle-parser";
import { BufferManager } from "./buffer-manager";
import { DisplayRenderer } from "./display-renderer";
import { PlaybackOptions } from "./playback-options";

export class MediaPlayerFacade {
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