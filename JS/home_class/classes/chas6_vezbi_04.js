class Cars {
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
    if (this.maxVelocity < this.currentVelocity) {
      console.log(`You have reached maximum speed!`);
    } else {
      console.log(`Accelerating by ${acceleration}`);
    }
  }

  goSlower(deceleration) {
    this.currentVelocity -= deceleration;
    if (this.currentVelocity < 0) {
      console.log("Car is stopping!");
    } else {
      console.log(`Slowing down by ${deceleration} km/h`);
    }
  }
}

const Jeep = new Cars("Jeep", "white", 5, 2002, 200, 50);

class Product {
  constructor(prodName, prodPrice) {
    this.product = prodName;
    this.price = prodPrice;
  }
}

class ShoppingCart {
  constructor(product) {
    this.product = product;
  }
}

const Milk = new Product("milk", 40);
const Bread = new Product("bread", 20);
