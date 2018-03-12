"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this._age = 0;
    this._height = 0;
    this._healthyStatus = true;
    this._harvested = null;
    this._fruits = null;
    this._goodQuality = 0;
    this._badQuality = 0;
  }

  get age() {
    return this._age
  }

  get height() {
    return this._height.toFixed(1)
  }

  get fruits() {
    return this._fruits
  }

  get healthyStatus() {
    return this._healthyStatus
  }

  get harvested() {
    return this._harvested;
  }

  get goodQuality(){
    return this._goodQuality;
  }

  get badQuality(){
    return this._badQuality;
  }

  // Get current states here

  // Grow the tree
  grow() {
    this._age = this._age + 1;
    if(this._age<=10){
      let growHeight = Math.floor(Math.random()*Math.floor(9))+1;
      this._height = this._height + growHeight/10;
    }
    else{
      this._height = this._height;
    }
    if(this._age>19){
      this._healthyStatus = false;
    }
  }

  // Produce some mangoes
  produceMangoes() {

    let goodQuality = [];
    let badQuality = [];
    let totalProduce = Math.floor(Math.random()*Math.floor(8))+1;
    for(let i=totalProduce;i>0;i--){
      let qualityRandom = Math.random();
      if(qualityRandom>=0.5){
        let quality = 'good';
        let mango = new Mango(quality);
        goodQuality.push(mango);
      }
      else{
        let quality = 'bad';
        let mango = new Mango(quality);
        badQuality.push(mango);
      }
    }
    this._goodQuality = goodQuality.length;
    this._badQuality = badQuality.length;

    return goodQuality.length + badQuality.length;
  }

  // Get some fruits
  harvest() {
    this._harvested = this.produceMangoes();
  }

}

class Mango {
  // Produce a mango
  constructor(quality) {
    this.quality = quality;
  }
}

/**
  * driver code untuk release 0*/
  let mangoTree = new MangoTree()
  do {
    mangoTree.grow();
    mangoTree.produceMangoes();
    mangoTree.harvest();
    console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested} (${mangoTree.goodQuality} good, ${mangoTree.badQuality} bad)`)
    } while (mangoTree.healthyStatus != false)


// Release 1
class AppleTree {}
class Apple {}

// Release 2
class FruitTree {}
class Fruit {}
