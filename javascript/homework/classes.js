class Kafemat {
  constructor(coffee, milk, water) {
    this.coffee = coffee;
    this.milk = milk;
    this.water = water;
    this.numOfCoffeesMade = 0;
  }

  makeCoffee(neededCoffee, neededMilk, neededWater) {
    if (this.coffee >= 7 && this.milk >= 20 && this.water >= 100) {
      this.numOfCoffeesMade++;
      this.coffee -= neededCoffee;
      this.milk -= neededMilk;
      this.water -= neededWater;
      console.log(this.coffee, this.milk, this.water);
    } else {
      if (this.coffee < 1) console.log(`Missing ${this.coffee + 7} coffee`);
      else if (this.milk < 1) console.log(`Missing ${this.milk + 20} milk`);
      else if (this.water < 1) console.log(`Missing ${this.water + 100} water`);
    }
  }
}
let coffee1 = new Kafemat(100, 100, 1000);

coffee1.makeCoffee(7, 20, 100);
coffee1.makeCoffee(7, 20, 100);
coffee1.makeCoffee(7, 20, 100);
coffee1.makeCoffee(7, 20, 100);
coffee1.makeCoffee(7, 20, 100);
coffee1.makeCoffee(7, 20, 100);
coffee1.makeCoffee(7, 20, 100);
