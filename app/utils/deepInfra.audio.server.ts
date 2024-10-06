import ffmpeg from "fluent-ffmpeg";
import ffmpegInstaller from "@ffmpeg-installer/ffmpeg";
import { Readable } from "stream";
import { promisify } from "util";
import { Writable } from "stream";
import fs from "fs/promises";
import path from "path";

ffmpeg.setFfmpegPath(ffmpegInstaller.path);

interface TTSInput {
  text: string;
  preset_voice?: string;
  speed?: number;
}

export const deepInfraTTS = async ({
  text,
  preset_voice,
  speed,
}: TTSInput): Promise<Buffer> => {
  console.log("deepInfraTTS", text, preset_voice);
  const response = await fetch(
    "https://api.deepinfra.com/v1/inference/deepinfra/tts",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${process.env.DEEP_INFRA_API_KEY}`,
      },
      body: JSON.stringify({
        text,
        preset_voice: preset_voice || "luna", // Default voice
        speed: speed || 1.0,
      }),
    }
  );

  console.log("Response status:", response.status);

  if (!response.ok) {
    throw new Error(`DeepInfra TTS API error: ${response.statusText}`);
  }

  const jsonResponse = await response.json();
  console.log("Received JSON response");

  // Extract the base64 audio data
  const base64Audio = jsonResponse.audio.split(",")[1];
  const audioBuffer = Buffer.from(base64Audio, "base64");
  console.log("Decoded audio buffer size:", audioBuffer.length);

  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    const ffmpegCommand = ffmpeg(Readable.from(audioBuffer))
      .inputFormat("wav") // The API returns WAV data
      .toFormat("mp3")
      .on("start", (commandLine) => {
        console.log("FFmpeg process started:", commandLine);
      })
      .on("error", (err) => {
        console.error("FFmpeg error:", err);
        reject(err);
      })
      .on("end", () => {
        console.log("FFmpeg processing finished");
        const result = Buffer.concat(chunks);
        console.log("Final buffer size:", result.length);
        resolve(result);
      });

    const outputStream = new Writable({
      write(chunk, encoding, callback) {
        chunks.push(chunk);
        callback();
      },
    });

    ffmpegCommand.pipe(outputStream);
  });
};
