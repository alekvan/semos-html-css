let countDuplicate = 0;
let nizaBroevi = [12, 15, 33, 56, 12, 36, 12, 78];
let nova = [];
for (let i = 0; i < nizaBroevi.length; i++) {
  for (let j = 0; j < nizaBroevi.length; j++) {
    if (i !== j) {
      if (nizaBroevi[j] === nizaBroevi[i]) {
        nova.push(nizaBroevi[i]);
      }
    }
  }
}
console.log(nova);

const animals = ["Dog", "Parrot", "Turtle", "Fish"];
const foods = ["Meat", "Seeds", "Leafs"];
const combined = [];

if (animals.length > foods.length) {
}
for (let i = 0; i < animals.length; i++) {
  combined.push(animals[i], foods[i]);
}
console.log(combined);

let numberList = [4, 10, 42, 23, 15, 41, 35, 63, 76];
let newList = [];
let userIn = window.prompt(
  `${numberList} 
  Kolku elementi od nizata se potrebni`,
  "Vnesi broj"
);

for (let i = userIn; i < numberList.length; i++) {
  newList.push(numberList[i]);
}
console.log(newList);
