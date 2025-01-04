import defaultError from "../defaultError.js";
import permittedCharecters, { passwordLength } from "./charactes.js";

export default async function handler(err) {
  if (err) defaultError();
  let password = "";
  const characters = permittedCharecters();
      
  for(let i=0; i<passwordLength; i++) {
    const sortedIndex = Math.floor(Math.random() * characters.length);
    password += characters[sortedIndex];
  }

  if (characters.length <= 0) defaultError();

  return password;
};
