import chalk from "chalk";
import qrGenerator from "qrcode-terminal";
import defaultError from "../defaultError.js";

export default async function handler(err, result) {
  if (err) {
    defaultError();
  }

  const small = result.type == 2;

  qrGenerator.generate(result.link, { small }, (qrcode) => {
    console.log(chalk.green("QR Code Gerado com sucesso: \n"));
    console.log(qrcode);
  });

}
