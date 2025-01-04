import prompt from "prompt";
import qrCodePrompt from "../../prompts/qrCodePrompt.js";
import handler from "./handler.js";

export default async function createQRCode() {
  prompt.get(qrCodePrompt, handler);
};