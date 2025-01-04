import prompt from "prompt";
import mainPropt from "./prompts/mainPrompt.js";

async function main() {
  prompt.get(mainPropt, async (err, result) => {
    if (result.select == 1) {
      console.log("escolheu 1");
    }
    if (result.select == 2) {
      console.log("escolheu 2");
    }
  });
};

main();

