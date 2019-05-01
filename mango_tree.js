"use strict"

// Release 2
class FruitTree {  // Initialize a new MangoTree
  constructor(maxAge, matureAge) {
    this._age = 0;
    this._height = 0;
    this._healthyStatus = true;
    this._harvested = 0;
    this._maxAge = maxAge;
    this._matureAge = matureAge;
    this._good = 0;
    this._bad = 0;
    this._array = [];
  }

  get age() {
    return this._age;
  }

  get height() {
    return this._height;
  }

  get healthyStatus() {
    return this._healthyStatus;
  }

  get harvested() {
    return this._harvested;
  }

  grow() {
    this._age += 1;
    if(this._age <= 15) {
      let growing = Math.floor(Math.random() * Math.floor(9)+1)/10;
      this._height += growing;
    } else if(this._height > 10) {
      this._height = this._height;
    }
    if(this._age > this._maxAge) {
      this._healthyStatus = false;
    }
  }

  // Produce some mangoes
  produceFruit(fruit_type) {
    var fruitTotal = Math.floor(Math.random()*Math.floor(10)+1);
      if(this._age >= this._matureAge) {
        for(var i = 0; i < fruitTotal;i++) {
          if(fruit_type === "mango") {
            var fruits = new Mango();
            this._array.push(fruits);
          }
          if(fruit_type === "apple") {
            var fruits = new Apple();
            this._array.push(fruits);
          }
        }
      }
  }

  harvest() {
    var good = [];
    var bad = [];
    for(var i = 0; i < this._array.length; i++) {
      if(this._array[i] === "good") {
        good.push(this._array[i]);
      } else {
        bad.push(this._array[i]);
      }
    }
    this._good = good.length;
    this._bad = bad.length;
    return this._harvested = good.length + bad.length;
  }
}

class Fruit {
  constructor() {
    this.fruitstatus = this.randomQuality();
  }

  randomQuality() {
    var fruitQ = Math.random();
    if(fruitQ >= 1) {
      var fruitstat = "good";
    } else {
      var fruitstat = "bad";
    }
    return fruitstat;
  }
}

class MangoTree extends FruitTree {
  constructor() {
    super(18, 7)
  }
}

class Mango extends Fruit {
  constructor() {
    super();
  }
}

class AppleTree extends FruitTree {
  constructor() {
    super(15, 5);
  }
}

class Apple extends Fruit {
  constructor(fruitstat) {
    super(fruitstat);
  }
}

// driver code untuk release 0
let mangoTree = new MangoTree();
let appleTree = new AppleTree();
let mangoes = new Mango();
console.log(mangoes);

do {
  mangoTree.grow();
  mangoTree.produceFruit("mango");
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
} while (mangoTree.healthyStatus != false)

do {
  appleTree.grow();
  appleTree.produceFruit("apple");
  appleTree.harvest();
  console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested = ${appleTree.harvested}`)
} while (appleTree.healthyStatus != false)
