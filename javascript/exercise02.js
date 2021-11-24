// const word = "slon";
// const regex = /[aeiou]/;
// const vowelCheck = regex.test(word);
// const word = "fotografija";
// const reg = /(?<=[aeiou])/g;
// console.log("word split", word.split(reg));

// let syllablesSplit = (string) => {
//   let splitWord = string.split("");
//   let syllArr = [];
//   let slog = [];
//   let soglaski = "";
//   for (i = 0; i < splitWord.length; i++) {
//     if (reg.test(splitWord[i])) {
//       syllArr.push(soglaski + splitWord[i]);
//       slog = [];
//     } else if (i === splitWord.length) {
//       slog.push(splitWord[i]);
//       soglaski = slog.join("");
//     } else {
//       slog.push(splitWord[i]);
//       soglaski = slog.join("");
//     }
//   }
//   return syllArr;
// };
// console.log(syllablesSplit(word));

const word = "otorinolaringologija".toLowerCase();
const wordSplit = (string) => {
  const reg = /(?<=[aeiou])/;
  return string.split(reg);
};
console.log(wordSplit(word));
