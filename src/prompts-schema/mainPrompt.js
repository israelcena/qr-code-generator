import chalk from "chalk";

const mainPromptSchema = [
  {
    name: "select",
    description: chalk.yellow.bgBlackBright.bold("Escolha a ferramente (1 - QRCODE ou 2 - PASSWORD)"),
    pattern: /^[1-2]+$/,
    message: chalk.red.italic("Escolha apenas a opção 1 ou 2"),
    required: true
  }
];

export default mainPromptSchema;
