import chalk from "chalk";
import handler from "./handler.js";

export default async function createPassword() {
  const password = await handler();
  console.log(chalk.green.bgBlackBright("password: " + password))
};
