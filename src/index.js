import prompt from "prompt";
import mainPropt from "./prompts-schema/mainPrompt.js";
import createQRCode from "./services/qr-code/create.js";
import createPassword from "./services/passaword/create.js";

async function main() {
  prompt.get(mainPropt, async (err, result) => {
    if (result.select == 1) {
      await createQRCode();
    }
    if (result.select == 2) {
      await createPassword();
    }
  });
};

main();
