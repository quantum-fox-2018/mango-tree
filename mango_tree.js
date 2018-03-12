"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this._age = 0;
    this._height = 0;
    this._fruits = 0;
    this._healthyStatus = true;
    this._fruitbasket = 0;
    this._harvested = 0;
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
    return this._healthyStatus;
  }

  get harvested() {
    return this._harvested;
  }


  // Get current states here

  // Grow the tree
  grow() {
    this._age += 1;
    if(this._age <= 15) {
      let growing = Math.floor(Math.random() * Math.floor(9)+1)/10;
      this._height += growing;
    } else if(this._height > 10) {
      this._height = this._height;
    }

    if(this._age > 18) {
      this._healthyStatus = false;
    }
  }

  // Produce some mangoes
  produceMangoes() {
    var mangoesTotal = Math.floor(Math.random()*Math.floor(10)+1);
    var good = [];
    var bad = [];
    for(var i = 0; i<mangoesTotal;i++) {
      var mangoQ = Math.random();
      if(mangoQ >= 1) {
        var mangostat = "good";
        var mangoes = new Mango(mangostat);
        good.push(mangoStat);
      } else {
        mangostat = "bad";
        var mangoes = new Mango(mangostat);
        bad.push(mangostat)
      }
    }
    this._good = good.length;
    this._bad = bad.length;
    return good.length + bad.length;
  }

  // Get some fruits
  harvest() {
    this._harvested = this.produceMangoes();
  }

}

class Mango{
  // Produce a mango
  constructor(mangostat) {
    this.mangostat = mangostat;
  }
}


  // driver code untuk release 0
  let mangoTree = new MangoTree()
  do {
    mangoTree.grow();
    mangoTree.produceMangoes();
    mangoTree.harvest();
    console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
    } while (mangoTree.healthyStatus != false)

// Release 1
class AppleTree {}
class Apple {}

// Release 2
class FruitTree {}
class Fruit {}
