"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this._age = 0;
    this._height = 0;
    this._fruits = [];
    this._healthyStatus = true;
    this._maxAge = Math.round(Math.random() * 4) + 21;
    this._maxHeight = Math.round(Math.random() * 4) + 20;
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
    return this.harvest()
  }


  // Get current states here

  // Grow the tree
  grow() {
    this._age++;
    this._height = this._height + Math.floor(Math.random()*2) + 1;
    
    if(this._age >= this._maxAge || this._height >= this._maxHeight){
      this._healthyStatus = false;
    }
    
  }

  // Produce some mangoes
  produceMangoes() {
    let totalFruit = Math.round(Math.random()*8);
    for(let loop = 0; loop<totalFruit; loop++){
      let buah = new Mango;
      this._fruits.push(buah);
    }
  }

  // Get some fruits
  harvest() {
    let good =0;
    let bad =0;
    for(let indexFruit = 0; indexFruit<this._fruits.length; indexFruit++){
      if(this._fruits[indexFruit].fruitQuality === 0){
        good++;
      }else{
        bad++;
      }
    }
    
    let result = `${this._fruits.length} (${good} good, ${bad} bad)`;
    return result;
  }

}

class Mango{
  // Produce a mango
  constructor() {
    this._fruitQuality = Math.round(Math.random());
  }

  get fruitQuality(){
    return this._fruitQuality;
  }
}

// var testing = new MangoTree;
// for(let counter =0; counter<25; counter++){
//   testing.grow();
// }
// console.log(testing.healthyStatus);


/**
  * driver code untuk release 0
  * let mangoTree = new MangoTree()
  * do {
  *   mangoTree.grow();
  *   mangoTree.produceMangoes();
  *   mangoTree.harverst();
  *   console.log(`[Year ${tree.age} Report] Height = ${tree.height} m | Fruits harvested = ${tree.harvested}`)
  * } while (mangoTree.healthyStatus != false)
  */

let mangoTree = new MangoTree()
console.log('The tree is alive! :smile:');
  do {
    mangoTree.grow();
    mangoTree.produceMangoes();
    mangoTree.harverst;
    console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} m | Fruits harvested = ${mangoTree.harvested}`)
    debugger;
  } while (mangoTree.healthyStatus != false)
console.log('The tree has met its end. :sad:');
 


// Release 1
class AppleTree {
  constructor() {
    this._age = 0;
    this._height = 0;
    this._fruits = [];
    this._healthyStatus = true;
    this._maxAge = Math.round(Math.random() * 4) + 25;
    this._maxHeight = Math.round(Math.random() * 4) + 30;
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
    return this.harvest()
  }


  // Get current states here

  // Grow the tree
  grow() {
    this._age++;
    this._height = this._height + Math.floor(Math.random()*2) + 1;
    
    if(this._age >= this._maxAge || this._height >= this._maxHeight){
      this._healthyStatus = false;
    }
    
  }

  // Produce some apples
  produceApples() {
    let totalFruit = Math.round(Math.random()*8);
    for(let loop = 0; loop<totalFruit; loop++){
      let buah = new Apple;
      this._fruits.push(buah);
    }
  }

  // Get some fruits
  harvest() {
    let good =0;
    let bad =0;
    for(let indexFruit = 0; indexFruit<this._fruits.length; indexFruit++){
      if(this._fruits[indexFruit].fruitQuality === 0){
        good++;
      }else{
        bad++;
      }
    }
    
    let result = `${this._fruits.length} (${good} good, ${bad} bad)`;
    return result;
  }

}

class Apple {
  constructor() {
    this._fruitQuality = Math.round(Math.random());
  }

  get fruitQuality(){
    return this._fruitQuality;
  }
}

// Release 2
class FruitTree {
  constructor(){
    
  }
 
}
class Fruit {}
