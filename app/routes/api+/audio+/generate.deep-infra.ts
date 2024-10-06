import { ActionFunctionArgs } from "@remix-run/node";
import { deepInfraTTS } from "~/utils/deepInfra.audio.server";
import { uploadAudioBuffer } from "~/utils/audio.server";

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const text = formData.get("text") as string;
  const preset_voice = formData.get("preset_voice") as string | undefined;
  const fileName = formData.get("fileName") as string | undefined;
  const _speed = formData.get("speed") as string | undefined;
  const speed = _speed ? parseFloat(_speed) : undefined;
  console.log("speed", speed);
  try {
    const audioBuffer = await deepInfraTTS({ text, preset_voice, speed });
    console.log("audioBuffer", audioBuffer.byteLength);
    if (!audioBuffer.byteLength) {
      return {
        data: null,
        error: "Failed to generate audio",
        speed,
      };
    }
    const { url, id } = await uploadAudioBuffer(audioBuffer, fileName);
    return { data: { url, id }, error: null };
  } catch (error) {
    console.error("Error generating, converting, or uploading audio:", error);
    return {
      data: null,
      error: "Failed to generate, convert, or upload audio",
    };
  }
};
