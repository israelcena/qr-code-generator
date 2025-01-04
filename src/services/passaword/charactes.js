import charactersOptions from './charactersOptions.json' assert { type: "json" };

const charactersSets = {
  UPPERCASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  LOWERCASE: "abcdefghijklmnopqrstuvwxyz",
  NUMBERS: "0123456789",
  SPECIAL_CHARACTERS: "!@#$%^&*()-_=+[]{}|;:<>?/`~"
};

export default function permittedCharecters() {
  let acceptedCharacters = [];
  const isTruthy = (value) => value === true || value === "true";

  for (const [key, value] of Object.entries(charactersSets)) {
    if (isTruthy(charactersOptions[key])) {
      acceptedCharacters.push(...value);
    }
  }
  return acceptedCharacters;
};

export const passwordLength = charactersOptions.LENGTH;
