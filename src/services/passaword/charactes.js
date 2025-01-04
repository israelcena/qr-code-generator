export default function permittedCharecters() {
  let acceptedCharacters = [];
  
  if(process.env.UPPERCASE) {
    acceptedCharacters.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  }

  if(process.env.LOWERCASE) {
    acceptedCharacters.push(..."abcdefghijklmnopqrstuvwxyz");
  }

  if(process.env.NUMBERS) {
    acceptedCharacters.push(..."0123456789");
  }

  if(process.env.SPECIAL_CHARACTERS) {
    acceptedCharacters.push(..."!@#$%^&*()-_=+[]{}|;:',.<>?/`~");
  }

  return acceptedCharacters;
};

export const passwordLegth = process.env.LENGTH;

