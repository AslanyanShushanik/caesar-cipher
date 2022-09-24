const caesarCipher = require("./caesar-cipher.js");

const fs = require("fs");
const inputFile = process.argv[2];
const inputShift = +process.argv[3];
const inputEncode = process.argv[4] === "true";

if (inputFile && inputFile.length && Number.isInteger(inputShift)) {
  fs.readFile(inputFile, "utf8", function (err, data) {
    const content = caesarCipher(data, inputShift, inputEncode);
    fs.writeFile(
      inputEncode ? "generated-files/encoded.txt" : "generated-files/decoded.txt",
      content,
      (err) => {
        if (err) {
          console.error(err);
        }
        console.log(`Successfully ${inputEncode ? "encoded" : "decoded"}!`);
      }
    );
  });
}