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
  let reverseArr = chars.slice().reverse();
  // let wordLength = chars.length - 1;
  // let flag = false;

  if (chars.join() === reverseArr.join()) {
    return true;
  } else return false;
  // for (let i = 0; i < chars.length / 2; i++) {
  //   if (chars[] === reverseArr[]) {

  //     return "Zborot e palindrom"
  //   } else return "Ne e palindrom";
  // }
  //if (flag) {
  //return "Zborot e palindrom";
  //}
}
console.log(checkPalindrom(word));

//NAJDOLG ZBOR VO RECHENICA

const sent = "The doll spun around in circle in hopes of coming alive";
function getLongWord(sentence) {
  let wordsInSentence = sentence.split(" ");
  let lengthCheck = 0;
  //let wordArr = [];
  let empt = [];
  for (let i = 0; i < wordsInSentence.length; i++) {
    // if (lengthCheck < wordsInSentence[i].length) {
    //   lengthCheck = wordsInSentence[i].length;
    // }
    if (wordsInSentence[i].length > lengthCheck) {
      empt = [];
      lengthCheck = wordsInSentence[i].length;
      empt.push(wordsInSentence[i]);
    } else if (wordsInSentence[i].length === lengthCheck) {
      empt.push(wordsInSentence[i]);
    }
  }
  // for (let j = 0; j < wordsInSentence.length; j++) {
  //   if (lengthCheck === wordsInSentence[j].length) {
  //     wordArr.push(wordsInSentence[j]);
  //   }
  // }
  return empt.length > 1
    ? `Najdolgite zborovi se ${empt}`
    : `Najdolgiot zbor e ${empt}`;
}
console.log(getLongWord(sent));
