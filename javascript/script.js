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
