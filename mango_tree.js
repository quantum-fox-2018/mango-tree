/*jshint esversion:6*/
/*jshint -W097*/
/*jshint -W117*/

"use strict";

// release 0

class MangoTree {
  constructor(param) {
    this._age = 0;
    this._height = 0;
    this._fruits = [];
    this._harvested = 0;
    this._healthy = true;
    this._maxAge = 10;
    this._maxFruits = 50;
    this._fruitName = param.fruitName;
    this._good = 0;
    this._bad = 0;
  }

  getAge() {
    return this._age;
  }

  getHeight() {
    return this._height;
  }

  getFruits() {
    return this._fruits;
  }

  getHealthyStatus() {
    return this._healthy;
  }

  get harvested() {
    return this._harvested;
  }


  grow() {
    this._age++;
    if (this._age <=10) {
      this._height += Math.round(random() / 12);
      return this._healthy = true;
    } else {
      return this._healthy = false;
    }
    
    
  }

  produceFruits() {
    let buah = random() + 30;
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
    this.quality = (random() % 2 == 0) ? "good" : "bad";
  }
}

function random() {
  return Math.floor(Math.random() * 10);
}

let mangoTree = new MangoTree({fruitName: "Mango"});
console.log(`The ${mangoTree._fruitName} tree is alive! :smile:`);

do {
  mangoTree.grow();
  mangoTree.produceFruits();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree._age} Report] Height = ${mangoTree._height} m | Fruits harvested = ${mangoTree._harvested}`);
} while (mangoTree.getHealthyStatus() != false);

console.log(`The ${mangoTree._fruitName} tree has met its end. :sad:\n`);
