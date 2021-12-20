// const word = "slonche";
// const reg = /[aeiou]/;
// const vowelCheck = reg.test(word);

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

const word = "aerodrom".toLowerCase();
const wordSplit = (string) => {
  const reg = /(?<=[aeiou])/;
  return string.split(reg);
};
console.log(wordSplit(word));
