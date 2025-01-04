import chalk from "chalk";
import handler from "./handler.js";

export default async function createPassword() {
  console.log(chalk.green.bgBlackBright("password: "))
  const password = await handler();
  console.log(chalk.green.bgBlackBright(password))
};