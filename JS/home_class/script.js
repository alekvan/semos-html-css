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

// const products = ["Orange", 300, "Banana", 200, "Apple", 400, "Kale", 500];
// let produkt = [];
// let price = [];
// for (let i = 0; i < products.length; i++) {
//   if (typeof products[i] === "string") {
//     produkt.push(products[i]);
//   } else price.push(products[i]);
// }
// console.log(...produkt, ...price);

// let nizi = [
//   ["a", "b", "c"],
//   ["h", "l", "p"],
//   ["r", "w"],
// ];

// console.log(nizi.flat());

// const users = [
//   { username: "koco", pass: "12345", email: "koco@text.com" },
//   { username: "stefan", pass: "23513", email: "" },
//   { username: "nikola", pass: "23552", email: "nik@tewts.com" },
//   { username: "aleksandar", pass: "23552", email: "" },
// ];

// for (let user of users) {
//   if (!user.email) {
//     console.log(user.username + " nema validna email adresa");
//   }
// }

// const student1 = {
//   index: 12352,
//   name: "Koco",
//   year: 2010,
//   grades: {
//     math: 10,
//     physics: 7,
//     chemistry: 7,
//   },
// };
// const student1 = {
//   index: 12352,
//   name: "Koco",
//   year: 2010,
//   grades: {
//     math: 6,
//     physics: 8,
//     chemistry: 9,
//   },
// };
// const student1 = {
//   index: 12352,
//   name: "Koco",
//   year: 2010,
//   grades: {
//     math: 6,
//     physics: 9,
//     chemistry: 9,
//   },
// };

/* Da se definira klasa kola koja sto sodrzi
 properties: model, boja, dolzina, godina na proizvodstvo,
 maksimalna brzina i momentalna brzina

 Treba da se kreiraat dva metodi so koi sto ke go
 ubrzuvame i usporuvame voziloto. Pri ubrzuvanje, dokolku ja dostigneme
 maksimalnata brzina, i probame da ubrzame uste povekje, da se ispecati predupreduvanje (ne moze da odis pobrzo od 200)
 Pri usporuvanje, dokolku stigneme do 0, da se ispecati poraka deka voziloto e zapreno (stopping...)

 Dvata metodi za ubrzuvanje i usporuvanje treba kako parametar da primaat vrednost
 (za kolku km/h ubrzuvame ili usporuvame) +20 -20

 Dokolku ja postigneme ili premineme maksimalnata brzina, da se vrati voziloto na 0 km/h

 Vozenjeto na kolata go simulirame so beskonecen while ciklus */

class Car {
  constructor(model, color, length, year, maxVelocity, currentVelocity) {
    this.model = model;
    this.color = color;
    this.length = length;
    this.year = year;
    this.maxVelocity = maxVelocity;
    this.currentVelocity = currentVelocity;
  }

  goFaster(acceleration) {
    this.currentVelocity += acceleration;
    if (this.currentVelocity >= this.maxVelocity) {
      console.log("You have reached the maximum speed limit");
      this.goSlower(this.currentVelocity);
    } else {
      console.log(`Accelerating by ${acceleration} km/h`);
    }
  }

  goSlower(deceleration) {
    this.currentVelocity -= deceleration;
    if (this.currentVelocity <= 0) {
      console.log("The car is stopping");
    } else {
      console.log(`Slowing down by ${deceleration} km/h`);
    }
  }
}

const Jeep = new Car("Jeep", "white", 5, 2010, 200, 50);

while (Jeep.currentVelocity > 0) {
  Jeep.goFaster(50);
}
class SportsCar extends Car {
  constructor(
    model,
    color,
    length,
    year,
    maxVelocity,
    currentVelocity,
    rimSize,
    nbExhaust
  ) {
    super(model, color, length, year, maxVelocity, currentVelocity);
    this.rimSize = rimSize;
    this.nbExhaust = nbExhaust;
  }
}

const McLaren = new SportsCar("McLaren", "blue", 5, 2015, 300, 150, 15, 2);

while (McLaren.currentVelocity > 0) {
  McLaren.goFaster(30);
}
