// let countDuplicate = 0;
// let nizaBroevi = [12, 15, 33, 56, 12, 36, 12, 78];
// let nova = [];
// for (let i = 0; i < nizaBroevi.length; i++) {
//   for (let j = 0; j < nizaBroevi.length; j++) {
//     if (i !== j) {
//       if (nizaBroevi[j] === nizaBroevi[i]) {
//         nova.push(nizaBroevi[i]);
//       }
//     }
//   }
// }
// console.log(nova);

// const animals = ["Dog", "Parrot", "Turtle", "Fish"];
// const foods = ["Meat", "Seeds", "Leafs"];
// const combined = [];

// if (animals.length > foods.length) {
// }
// for (let i = 0; i < animals.length; i++) {
//   combined.push(animals[i], foods[i]);
// }
// console.log(combined);

// let numberList = [4, 10, 42, 23, 15, 41, 35, 63, 76];
// let newList = [];
// let userIn = window.prompt(
//   `${numberList}
//   Kolku elementi od nizata se potrebni`,
//   "Vnesi broj"
// );

// for (let i = userIn; i < numberList.length; i++) {
//   newList.push(numberList[i]);
// }
// console.log(newList);

const products = ["Orange", 300, "Banana", 200, "Apple", 400, "Kale", 500];
let produkt = [];
let price = [];
for (let i = 0; i < products.length; i++) {
  if (typeof products[i] === "string") {
    produkt.push(products[i]);
  } else price.push(products[i]);
}
console.log(...produkt, ...price);

let nizi = [
  ["a", "b", "c"],
  ["h", "l", "p"],
  ["r", "w"],
];

console.log(nizi.flat());

const users = [
  { username: "koco", pass: "12345", email: "koco@text.com" },
  { username: "stefan", pass: "23513", email: "" },
  { username: "nikola", pass: "23552", email: "nik@tewts.com" },
  { username: "aleksandar", pass: "23552", email: "" },
];

for (let user of users) {
  if (!user.email) {
    console.log(user.username + " nema validna email adresa");
  }
}

const student1 = {
  index: 12352,
  name: "Koco",
  year: 2010,
  grades: {
    math: 10,
    physics: 7,
    chemistry: 7,
  },
};
const student1 = {
  index: 12352,
  name: "Koco",
  year: 2010,
  grades: {
    math: 6,
    physics: 8,
    chemistry: 9,
  },
};
const student1 = {
  index: 12352,
  name: "Koco",
  year: 2010,
  grades: {
    math: 6,
    physics: 9,
    chemistry: 9,
  },
};
