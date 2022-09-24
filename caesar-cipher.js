function getCipherLetter(
  characterCode,
  shift,
  startingCode,
  endingCode,
  encode
) {
  let quantity = endingCode - startingCode + 1;
  if (Math.abs(shift) > quantity) shift = shift % quantity;
  if (!encode) shift = -shift;

  let shiftedIndx = (characterCode + shift) % (quantity + startingCode);
  if (shiftedIndx < startingCode && shift >= 0) {
    shiftedIndx += startingCode;
  }
  if (shiftedIndx < startingCode && shift < 0) {
    const remainingShift = shift + characterCode - startingCode + 1;
    shiftedIndx = endingCode + remainingShift;
  }
  return String.fromCharCode(shiftedIndx);
}

function caesarCipher(text, shift, encode) {
  let cipheredText = "";
  for (let i = 0; i < text.length; i++) {
    let characterCode = text[i].charCodeAt(0);
    if (characterCode >= 48 && characterCode <= 57) {
      cipheredText += getCipherLetter(characterCode, shift, 48, 57, encode);
    } else if (characterCode >= 65 && characterCode <= 90) {
      cipheredText += getCipherLetter(characterCode, shift, 65, 90, encode);
    } else if (characterCode >= 97 && characterCode <= 122) {
      cipheredText += getCipherLetter(characterCode, shift, 97, 122, encode);
    } else {
      cipheredText += text[i];
    }
  }
  return cipheredText;
}

module.exports = caesarCipher;