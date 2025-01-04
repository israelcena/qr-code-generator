import defaultError from "../defaultError.js";
import permittedCharecters, { passwordLegth } from "./charactes.js";

export default async function handler(err, result) {
  if (err) {
    defaultError();
  }
  
  const characters = permittedCharecters();
  let password = "";
  
  for(let i=0; i<passwordLegth; i++) {
    const sortedIndex = Math.floor(Math.random() * characters.length);
    password += characters[sortedIndex];
  }

  return password;
};

