// We want to take in a string such as "Erik" and return the 7 seg display representation for each letter.
// can change between common anode and common cathode
// for "Erik" and common cathode it would be return E -> 10000110b (Binary)-> 86H (Hexadecimal)

// FUNCTIONS:
//  -> charToBinary(char, mode) -- converts a character to its equivilent in binary either common annode mode or cathode mode
//  -> binaryToHex(binary) -- converts a binary string to its HEX equal in the format "00H"
//  -> converter(string, mode) -- converts the string to an array of binary and Hex codes that can be used on a 7 seg display
//  -> anodeToCathode(binaryString) -- flips all the 1 and 0 in a binary string.

const converterEnum = {
  // this is seven bits only and does not include the decimal at the front. // this is also from LSB to MSB so it must be reversed.
  A: "1110111",
  a: "1111101",
  B: "0011111",
  b: "0011111",
  C: "1001110",
  c: "0001101",
  D: "0111101",
  d: "0111101",
  E: "1001111",
  e: "1001111",
  F: "1000111",
  f: "1000111",
  G: "1011110",
  g: "1011110",
  H: "0110111",
  h: "0010111",
  I: "0000110",
  i: "0000110",
  J: "0111100",
  j: "0111100",
  L: "0001110",
  l: "0001110",
  N: "0010101",
  n: "0010101",
  O: "1111110",
  o: "0011101",
  P: "1100111",
  p: "1100111",
  Q: "1110011",
  q: "1110011",
  R: "0000101",
  r: "0000101",
  S: "1011011",
  s: "1011011",
  T: "0001111",
  t: "0001111",
  U: "0111110",
  u: "0011100",
  Y: "0111011",
  y: "0111011",
  0: "1111110", // 0
  1: "0110000", // 1
  2: "1101101", // 2
  3: "1111001", // 3
  4: "0110011", // 4
  5: "1011011", // 5
  6: "1011111", // 6
  7: "1110000", // 7
  8: "1111111", // 8
  9: "1111011", // 9
  " ": "00000000",
  displayOff: "0000000",
};

function converter(string, mode = "Common Cathode") {
  // we return an output object with arrays of binary strigs and hex strings.
  var chars = [];
  var convertedBinary = []; // this will be an array of strings
  var convertedHex = []; // this will be an array of strings
  for (key in string) {
    console.log("We are working on character " + string[key] + "");
    chars.push(string[key]);
    convertedBinary.push(charToBinary(string[key], mode)); // converts the character to its binary string for the 7 seg display
  }

  for (key in convertedBinary) {
    // console.log("We are working binary string " + convertedBinary[key] + "");
    convertedHex.push(binaryToHex(convertedBinary[key])); // converts the binary string to its equal in HEX
  }
  var outputHtmlString = "";
  // formatting outputs to a string
  for (key in convertedBinary) {
    outputHtmlString =
      outputHtmlString +
      chars[key] +
      ` => Binary: ${convertedBinary[key]} ` +
      `Hex: ${convertedHex[key]} <br>`;
  }
  return outputHtmlString;
}

function binaryToHex(binary) {
  return parseInt(binary, 2).toString(16).toUpperCase() + "H";
}

function charToBinary(char, mode) {
  // function returns a string of binary
  var returnBinary; // this is a string of binary that gets returned.
  // it will get assigned below.
  if (char in converterEnum) {
    // console.log("the character: " + char + " was found in in converterEnum");
    returnBinary = converterEnum[char];
  } else {
    // console.log("the character: " + char + "was not found in converterEnum");
    // console.log("We are setting the binary string to all be off");
    returnBinary = converterEnum.displayOff;
  }

  if (mode === "Common Cathode") {
    // console.log("Cathode mode was selected, complimenting binary string...");
    returnBinary = anodeToCathode(returnBinary);
  } else {
    // console.log("Mode was set to anode, compliment not performed");
  }

  return reverseString(returnBinary);
}

function anodeToCathode(binaryString) {
  var binaryArray = Array.from(binaryString); // creates an array so we can mutate the string
  // console.log("Binary array is " + binaryArray);
  binaryArray.forEach((element, index) => {
    if (element == "1") {
      binaryArray[index] = "0";
    } else if (element == "0") {
      binaryArray[index] = "1";
    } else {
      // console.log("Did not run anodeToCathode assignment");
    }
  });
  // console.log("After anodeToCathode we get: " + binaryArray);
  return binaryArray.join("");
}

function reverseString(str) {
  // this function will reverse the binary so it is in MSB to LSB form.
  var splitString = str.split("");
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("");

  return joinArray;
}

document.getElementById("convert").onclick = function () {
  var stringInput = document.getElementById("stringInput").value;
  var mode = document.getElementById("mode").value;
  console.log(typeof mode);
  var binaryAndHex = converter(stringInput, mode);
  document.getElementById("result").innerHTML = binaryAndHex;
};
