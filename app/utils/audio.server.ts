import { v4 as uuid } from "uuid";
import { supabaseClient } from "./supabase.server";

const audioBucket = "darkVioletPublic";
const audioFolder = "voiceGens/";
const audioBaseUrl =
  "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/object/public/darkVioletPublic/voiceGens/";

export const uploadAudioBuffer = async (
  audioBuffer: Buffer,
  fileName?: string
) => {
  const id = fileName || uuid();
  const { error } = await supabaseClient.storage
    .from(audioBucket)
    .upload(audioFolder + id, audioBuffer, {
      contentType: "audio/mpeg",
      cacheControl: "3600",
      upsert: true,
    });

  if (error) {
    throw error;
  }

  const newAudioUrl = audioBaseUrl + id;
  return { url: newAudioUrl, id };
};
