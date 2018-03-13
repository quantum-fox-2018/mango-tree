/*jshint esversion:6*/
/*jshint -W097*/
/*jshint -W117*/

"use strict";

// release 0

class FruitTree {
  constructor() {
    this._age = 0;
    this._height = 0;
    this._fruits = [];
    this._harvested = '';
    this._healthy = true;
    this._maxAge = 20;
    this._maxFruits = 50;
    this._good = 0;
    this._bad = 0;
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
    return this._healthy;
  }

  get harvested() {
    return this._harvested;
  }

  grow() {
    this._age++;
    if (this._age < 19) {
      this._height += Math.floor(Math.random() * 12) / 12;
    } else if(this._age > 19){      
      this._healthy = false;
    }          
  }

    
  produceFruits() {
    let buah = Math.floor(Math.random() * 12);
    let totalBuah = (buah > this._maxFruits) ? this._maxFruits : buah;

    for (let i = 0; i < totalBuah; i++) {
      let fruit = new Fruit();      
      if (fruit.quality == "good") {
        this._good++;
      } else {
        this._bad++;
      }      
      this._fruits.push(fruit);
    }  
  }  

  harvest() {
    this._harvested = `${this._fruits.length} (${this._good} good, ${this._bad} bad)`;
    this._fruits = [];
    this._bad = 0;
    this._good = 0;
  }
}

class Fruit {  
  constructor() {
    this.quality = Math.floor(Math.random() * 12) % 2 == 0 ? "good" : "bad";  
  }
}

// Mangga
class MangoTree extends FruitTree {
  constructor() {
    super();
  }
}


let mangoTree = new FruitTree();
console.log(`The Manggo tree is alive! :smile:`);

do {  
  mangoTree.grow();
  mangoTree.produceFruits();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree._age} Report] Height = ${mangoTree._height.toFixed(1)} m | Fruits harvested = ${mangoTree._harvested}`);
} while (mangoTree.healthyStatus != false);

console.log(`The Manggo tree has met its end. :sad:\n`);

//================================

// Apple
class AppleTree extends FruitTree {
  constructor() {
    super();
  }
}


let appleTree = new FruitTree();
console.log(`The Apple tree is alive! :smile:`);

do {  
  appleTree.grow();
  appleTree.produceFruits();
  appleTree.harvest();
  console.log(`[Year ${appleTree._age} Report] Height = ${appleTree._height.toFixed(1)} m | Fruits harvested = ${appleTree._harvested}`);
} while (appleTree.healthyStatus != false);

console.log(`The Apple tree has met its end. :sad:\n`);

//================================


// Pear
class PearTree extends FruitTree {
  constructor() {
    super();
  }
}


let pearTree = new FruitTree();
console.log(`The Pear tree is alive! :smile:`);

do {  
  pearTree.grow();
  pearTree.produceFruits();
  pearTree.harvest();
  console.log(`[Year ${pearTree._age} Report] Height = ${pearTree._height.toFixed(1)} m | Fruits harvested = ${pearTree._harvested}`);
} while (pearTree.healthyStatus != false);

console.log(`The Pear tree has met its end. :sad:\n`);
