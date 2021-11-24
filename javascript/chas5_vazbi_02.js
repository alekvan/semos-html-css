// Imame torta so fiksen broj parcinja primer 15, da se napise f-ja dali tortata moze podednakvo da se podeli na odreden broj luge

const ppl = 5;
const piece = 10;

let cakePieces = (cakePiece, people) => {
  if (cakePiece % people === 0) return "Moze da se podeli";
  else return "Ne moze da se podeli";
};

console.log(cakePieces(15, 7));

// kilometar 50 den sekoj nareden 20 koshtalo 300

let cash = 300;
let kmPassed = 0;

function taxiRide(cashSpent) {
  const startKm = cashSpent - 50;
  const everyOtherKm = 20;
  if (cashSpent === 50) return "1 km passed";
}

function slog(word) {
  const samoglaski = ["a", "e", "i", "o", "u"];
  let arrSplitWord = word.split();
  for (i = 0; i < arrSplitWord.length; i++) {}
}
