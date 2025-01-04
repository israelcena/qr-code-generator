import chalk from "chalk";

const qrCodePrompt = [
  {
    name: "link",
    description: chalk.yellow("Digite o link para gerar o QR CODE"),
    required: true
  },
  {
    name: "type",
    description: chalk.yellow("Escolha entre o tipo (1- Normal ou 2- Terminal)"),
    pattern: /^[1-2]+$/,
    message: chalk.red.italic("Escolha apenas a opção 1 ou 2"),
    required: true
  }
];

export default qrCodePrompt;