"use strict"

// Release 2
class FruitTree {
  constructor() {
    this._age = 0;
    this._maxAge = this._maxAge;
    this._matureAge = this._matureAge;
    this._height = 0;
    this._maxHeight = this._maxHeight;
    this._fruits = 0;
    this._harvested = [];
    this._healthyStatus = true;
  }

  set maxAge(age) {
    this._maxAge = age;
  }

  set matureAge(mature) {
    this._matureAge = mature;
  }

  set maxHeight(height) {
    this._maxHeight = height;
  }

  get age() {
    return this._age;
  }

  get height() {
    return this._height;
  }

  get fruits() {
    return this._fruits;
  }

  get healthyStatus() {
    return this._healthyStatus;
  }

  get harvested() {
    let harvested = '';
    let countFruits = this._harvested.length-1;
    let countGood = 0; let countBad = 0;

    for (let i = 0; i < this._harvested.length; i++) {
      for (let j in this._harvested[i]) {
        if (this._harvested[i][j] === 'Good') {
          countGood++;
        } else if (this._harvested[i][j] === 'Bad') {
          countBad++;
        }
      }
    }

    harvested = `${countFruits} (${countGood} good, ${countBad} bad)`;

    return harvested;
  }

  // Get current states here
  // Grow the tree
  grow() {
    this._harvested = [];
    let growthHeightNum = Math.random() * (0.4 - 0.2) + 0.4;

    // age
    this._age += 1;
    if (this._age === this._maxAge) {
      this._healthyStatus = false;
    }
    // height
    this._height += growthHeightNum;
    if (this._age > this._matureAge || this._height > this._maxHeight) {
      this._height = this._maxHeight;
    }
    // produce fruits
    this.produceFruit();
  }

  // Produce some mangoes
  produceFruit() {
    let quantity = Math.floor(Math.random() * 7);

    for (let i = 0; i < quantity; i++) {
      let quality = Math.floor(Math.random() * 2);
      if (quality == 0) {
        quality = `Bad`;
        let fruit = new Fruit(quality);
        this.harvest(fruit);
      } else {
        quality = `Good`;
        let fruit = new Fruit(quality);
        this.harvest(fruit);
      }
    }
  }

  // Get some fruits
  harvest(fruit) {
    this._harvested.push(fruit);
  }
}

class Fruit {
  constructor(quality) {
    this.fruitQuality = quality;
  }
}

// release 0
class MangoTree extends FruitTree {
  // Initialize a new MangoTree
  constructor() {
    super();
    super.maxAge = 16;
    super.matureAge = 11;
    super.maxHeight = 5.2;
  }
}

class Mango extends Fruit {
  // Produce a mango
  constructor() {
    super();
  }
}


// Release 1
class AppleTree extends FruitTree {
  constructor() {
    super();
    super.maxAge = 18;
    super.matureAge = 9;
    super.maxHeight = 4.8;
  }
}

class Apple extends Fruit {
  constructor() {
    super();
  }
}

console.log(`The mango tree is alive! :smile:`);

let mangoTree = new MangoTree();

do {
  mangoTree.grow();
  mangoTree.produceFruit();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height.toFixed(1)} | Fruits harvested = ${mangoTree.harvested}`);
} while (mangoTree.healthyStatus != false)

console.log(`The mango tree has met its end. :sad:`);
console.log();

/**
  * driver code untuk release 0
  * let mangoTree = new MangoTree()
  * do {
  *   mangoTree.grow();
  *   mangoTree.produceMangoes();
  *   mangoTree.harverst();
  *   console.log(`[Year ${tree.age} Report] Height = ${tree.height} | Fruits harvested = ${tree.harvested}`)
  * } while (mangoTree.healthyStatus != false)
  */

  console.log(`The apple tree is alive! :smile:`);

  let appleTree = new AppleTree();

  do {
    appleTree.grow();
    appleTree.produceFruit();
    appleTree.harvest();
    console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height.toFixed(1)} | Fruits harvested = ${appleTree.harvested}`);
  } while (appleTree.healthyStatus != false)

  console.log(`The apple tree has met its end. :sad:`);
