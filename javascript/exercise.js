//KONVERTIRANJE TEMPERATURA

function convertTemperature(temperature, degree) {
  let lowDeg = degree.toLowerCase();
  if (typeof temperature !== "number" || (lowDeg !== "c" && lowDeg !== "f")) {
    return "Wrong input";
  } else if (lowDeg === "c") {
    const convertF = (temperature * 9) / 5 + 32;
    return `${convertF.toFixed(0)} Fahrenheit`;
  } else if (lowDeg === "f") {
    const convertC = ((temperature - 32) * 5) / 9;
    return `${convertC.toFixed(0)} Celsius`;
  }
}
let temp = 77;
let deg = "f";
console.log(convertTemperature(temp, deg));

//PALINDROM

const word = "racecar";
function checkPalindrom(word) {
  if (typeof word !== "string") {
    return "Wrong input";
  }
  let chars = word.split("");
  let wordLength = chars.length - 1;
  let flag = true;
  for (let i = 0; i < chars.length / 2; i++) {
    if (chars[i] === chars[wordLength]) {
      wordLength--;
      flag = true;
    } else return "Ne e palindrom";
  }
  if (flag) {
    return "Zborot e palindrom";
  }
}
console.log(checkPalindrom(word));

//NAJDOLG ZBOR VO RECHENICA

const sent = "The doll spun around in circles in hopes of coming alive";
function getLongWord(sentence) {
  let wordsInSentence = sentence.split(" ");
  let lengthCheck = wordsInSentence[0].length;
  let wordArr = [];
  for (let i = 0; i < wordsInSentence.length; i++) {
    if (lengthCheck < wordsInSentence[i].length) {
      lengthCheck = wordsInSentence[i].length;
    }
  }
  for (let j = 0; j < wordsInSentence.length; j++) {
    if (lengthCheck === wordsInSentence[j].length) {
      wordArr.push(wordsInSentence[j]);
    }
  }
  return wordArr.length > 1
    ? `Najdolgite zborovi se ${wordArr}`
    : `Najdolgiot zbor e ${wordArr}`;
}

console.log(getLongWord(sent));
