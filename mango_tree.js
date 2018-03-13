"use strict"

// Release 2
class FruitTree {  // Initialize a new MangoTree
  constructor(age, height, healthyStatus, harvested,maxAge, matureAge, good, bad) {
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
  // Get current states here

  // Grow the tree
  grow(maxAge) {
    this._age += 1;
    if(this._age <= 15) {
      let growing = Math.floor(Math.random() * Math.floor(9)+1)/10;
      this._height += growing;
    } else if(this._height > 10) {
      this._height = this._height;
    }

    if(this._age > maxAge) {
      this._healthyStatus = false;
    }
  }

  // Produce some mangoes
  produceFruit(matureAge) {
    var fruitTotal = Math.floor(Math.random()*Math.floor(10)+1);
    var good = [];
    var bad = [];
    if(this._age >= matureAge) {
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
    this._good = good.length;
    this._bad = bad.length;
    return good.length + bad.length;
  }

  // Get some fruits
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

  // Initialize a new MangoTree
  constructor(age, height, healthyStatus, harvested, maxAge, matureAge, good, bad) {
    super(age, height, healthyStatus, harvested, 18, 7, good, bad)
  }
  // Get current states here
}

class Mango extends Fruit {
  // Produce a mango
  constructor(fruitstat) {
    super(fruitstat);
  }
}

// Release 1
class AppleTree extends FruitTree {
  // Initialize a new MangoTree
  constructor(age, height, healthyStatus, harvested,maxAge, matureAge, good, bad) {
    super(age, height, healthyStatus, harvested, 15, 5, good, bad);
  }

}
class Apple {
  constructor(applestat) {
    this.applestat = applestat;
  }
}

// driver code untuk release 0
let fruitTree = new FruitTree();
let mangoTree = new MangoTree()
do {
  fruitTree.grow();
  fruitTree.produceFruit();
  fruitTree.harvest();
  console.log(`[Year ${fruitTree.age} Report] Height = ${fruitTree.height} | Fruits harvested = ${mangoTree.harvested}`)
} while (fruitTree.healthyStatus != false)
