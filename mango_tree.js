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
    var good = [];
    var bad = [];
    if(fruit_type !== '') {
      if(this._age >= this._matureAge) {
        for(var i = 0; i < fruitTotal;i++) {
          var fruitQ = Math.random();
          if(fruitQ >= 1) {
            var fruitstat = "good";
            var fruits = new Fruit(fruitstat);
            good.push(fruitstat);
          } else {
            fruitstat = "bad";
            var fruits = new Fruit(fruitstat);
            bad.push(fruitstat)
          }
        }
      }
    }
    this._good = good.length;
    this._bad = bad.length;
    return good.length + bad.length;
  }

  harvest() {
    this._harvested = this.produceFruit();
  }
}

class Fruit {
  constructor(fruitstat) {
    this.applestat = fruitstat;
  }
}

class MangoTree extends FruitTree {
  constructor() {
    super(18, 7)
  }
}

class Mango extends Fruit {
  constructor(fruitstat) {
    super(fruitstat);
  }
}

class AppleTree extends FruitTree {
  constructor() {
    super(15, 5);
  }
}

class Apple {
  constructor(applestat) {
    this.applestat = applestat;
  }
}

// driver code untuk release 0
let fruitTree = new FruitTree();
let mangoTree = new MangoTree();
let appleTree = new AppleTree();
do {
  mangoTree.grow();
  mangoTree.produceFruit();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
} while (mangoTree.healthyStatus != false)

do {
  appleTree.grow();
  appleTree.produceFruit();
  appleTree.harvest();
  console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested = ${appleTree.harvested}`)
} while (appleTree.healthyStatus != false)
