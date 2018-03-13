/*jshint esversion:6*/
/*jshint-W097*/
// "use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this._age = 0;
    this._height = 0;
    this._fruits = 0;
    this._healtyStatus = true;
    this._harvested= '';
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

  get healtyStatus() {
    return this._healtyStatus;
  }

  get harvested() {
    return this._harvested;
  }

  // Get current states here

  // Grow the tree
  grow() {
    this._age++;
    if(this._age < 10){
      this._height += Math.random();
    }else if(this._age === 20){
      this._healtyStatus = false;
    }
  }

  // Produce some mangoes
  produceMangoes() {
    if(this._age > 2){
      this._fruits = Math.round(Math.random()*10)+1;
    }
  }

  // Get some fruits
  harvest() {
    let countGood = 0;
    let countBad = 0;
    for(let  i = 0 ; i < this._fruits ; i++){
      let random = Math.round(Math.random());
      if(random === 0){
        countBad ++;
      }
      else{
        countGood++;
      }
    }
    this._harvested = `${countGood} good, ${countBad} bad.`;
  }

}

class Mango {
  // Produce a mango
  constructor() {
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


console.log(`The tree is alive! :smile:`);
let mangoTree = new MangoTree();

do{
  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree._age} Report] Heigth = ${mangoTree._height.toFixed(1)}m | Fruits harvested = ${mangoTree._fruits} ,(${mangoTree._harvested})`);
} while (mangoTree.healtyStatus != false);

console.log(`The tree hase met its end. :sad:`);


console.log(mangoTree.harvest())
