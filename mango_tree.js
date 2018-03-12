"use strict"

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

// release 0

class FruitTree {
  constructor() {
    this._age = 0;
    this._matureAge = this._matureAge;
    this._maxAge = this._maxAge;
    this._height = 0;
    this._maxHeight = this._maxHeight;
    this._fruits = [];
    this._maxFruits = this._maxFruits;
    this._harvested = this._harvested;
    this._isHealthy = true;
  }

  set maxHeight(value) {
    this._maxHeight = value;
  }
  set maxFruits(value) {
    this._maxFruits = value;
  }
  set maxAge(value) {
    this._maxAge = value;
  }

  set matureAge(value){
    this._matureAge = value
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

 get matureAge() {
   return this._matureAge;
 }

 get healthyStatus() {
   return this._isHealthy;
 }

 get harvested() {
   return this._harvested;
 }

 grow() {
  if (this.age < this.matureAge) {
     this._height += getRandomInt(1, 6);
  }
  this._age = this._age + 1;
  if(this._age >= this._maxAge || this._height >= this._maxHeight) {
    this._isHealthy = false;
    }
  }

  produceFruits() {
    if (this.age >= this.matureAge) {
      let maxFruits = getRandomInt(1, this._maxFruits+1);
      for(let i = 0; i < maxFruits; i++) {
        let fruit = new Fruit();
        this._fruits.push(fruit);
      }
    }
  }

  harvest() {
    let badFruits = []
    let goodFruits = []
    for (var i = 0; i < this.fruits.length; i++) {
      if (this.fruits[i].quality === 0) {
        badFruits.push(this.fruits[i])
      }
      else{
        goodFruits.push(this.fruits[i])
      }
    }
    this._harvested = `Harvested ${this.fruits.length}, (good : ${goodFruits.length}, bad : ${badFruits.length})`;
    this._fruits = [];
  }

}

class Fruit {
  // Produce a fruit
  constructor() {
    this._quality = getRandomInt(0, 2);
  }

  get quality(){
    return this._quality
  }

  set quality(quality){
    this._quality = quality
  }
}

class MangoTree extends FruitTree{
  constructor() {
    super();
    super.maxFruits = 20;
    super.maxAge = 10;
    super.maxHeight = 50;
    super.matureAge = 3
  }
}

class Mango extends Fruit{
  constructor() {
    super();
  }
}

class AppleTree extends FruitTree{
  constructor() {
    super();
    super.maxFruits = 25;
    super.maxAge = 15;
    super.maxHeight = 55;
    super.matureAge = 5
  }
}

class Apple extends Fruit{
  constructor() {
    super();
  }
}

let mangoTree = new MangoTree();
console.log("Mango");
console.log("The mango tree is alive! :smile:");
do {
  mangoTree.grow();
  mangoTree.produceFruits();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | ${mangoTree.harvested}`)
} while (mangoTree.healthyStatus != false)
console.log("The mango tree has met its end. :sad:");

console.log();

let appleTree = new AppleTree();
console.log("Apple");
console.log("The apple tree is alive! :smile:");
do {
  appleTree.grow();
  appleTree.produceFruits();
  appleTree.harvest();
  console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | ${appleTree.harvested}`)
} while (appleTree.healthyStatus != false)
console.log("The apple tree has met its end. :sad:");
