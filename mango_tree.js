"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor(umur, tinggi, maxFruits, ) {
    this._age = 0;
    this._height = 0;
    this._fruits = 0;
    this.healthStatus = true;
    this._harvested = [];
    // this.maxFruits = this.fruits;
    // this.healtyStatus = this.healtyStatus;
    // this.harvestedFruits = this.harvested;

  }

  get age() {
    // this.umur = this.umur + 1;
    return this._age;
  }

  get height() {
    return this._height;
  }

  get fruits() {
    return this._fruits;
  }

  get healtyStatus() {
    return this.healthStatus;
  }

  get harvested() {

    return `${this._fruits} (${this._harvested})`;
  }


  // Get current states here

  // Grow the tree
  grow() {
    this._age = this._age+1;

    //menmabahkan tinggi
    if(this._age < 18){
      let randomHeight = Math.random();
      this._height = this._height + parseFloat(randomHeight.toFixed(1));;

    }
    if(this._age >= 20){
        this.healthStatus = false;
    }
  }

  // Produce some mangoes
  produceMangoes() {
    if (this._age >=18) {
        this._fruits = 0;
    }else if(this._age >=5){
        let fuitsTotal = Math.round(Math.random() * (9-4)+9);
        this._fruits = fuitsTotal;
    }
  }

  // Get some fruits
  harvest() {
    let mango = new Mango(this._fruits);
    this._harvested = mango.quality;
  }

}

class Mango {
  // Produce a mango
  constructor(fruits) {
    this.quality = [];
    let good = 0;
    let bad = 0;
    for(let i = 0; i < fruits; i++){
        let randomQuality = Math.round(Math.random());
        if(randomQuality == 0){
            good += 1;
        }else{
            bad += 1;
        }
    }
    this.quality.push(good+' good');
    this.quality.push(bad+' bad');
  }
}

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

// Release 1
class AppleTree {}
class Apple {}

// Release 2
class FruitTree {}
class Fruit {}



console.log('The tree is alive! :smile:');
let  mangoTree = new MangoTree();
// for(let i = 0; i < 20; i++){
do {
  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} m | Fruits harvested = ${mangoTree.harvested}`);
} while(mangoTree.healthStatus != false);

console.log(`The tree has met its end. :sad:`);
// console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} m | Fruits harvested = ${} (${} good, ${} bad)`);
