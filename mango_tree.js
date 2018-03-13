"use strict"

class FruitTree {
  constructor() {
    this._age = 0;
    this._height = 0;
    this._fruits = [];
    this._healthyStatus = true;
    this._harvested = 0;
    this._good = 0;
    this._bad = 0;
  }

  get age() {
    return this._age;
  }

  get height() {
    return this._height.toFixed(1);
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

  get good() {
    return this._good;
  }

  get bad() {
    return this._bad;
  }

  // Grow the tree
  grow() {
    //dead at age 20
    this._age++;
    if(this._height < 5){
      this._height += Math.random();
    }
    if(this._age === 20) this._healthyStatus = false;
  }

  // Get some fruits
  harvest() {
    this._good = 0;
    this._bad = 0;
    this._harvested = (this._fruits).length;
    for(let count = 0; count < this._harvested; count++){
      if(this._fruits[count].quality === true){
        this._good++;
      } else {
        this._bad++
      }
    }
    this._fruits = [];
  }

}

class MangoTree extends FruitTree{
  constructor() {
    super();
  }

  // Produce some mangoes
  produceMangoes() {
    if(this.age > 3) {
      let fruit_total = Math.floor(Math.random() * (21 - 1) + 1);
      for(let count = 0; count < fruit_total; count++){
        let mango = new Mango();
        this._fruits.push(mango)
      }
    }
  }

}


class AppleTree extends FruitTree{
  constructor() {
    super();
  }

  produceApples() {
    if(this.age > 3){
      let fruit_total = Math.floor(Math.random() * (21 - 1) + 1);
      for(let count = 0; count < fruit_total; count++){
        let apple = new Apple();
        this._fruits.push(apple)
      }
    }
  }
}

class Fruit {
  constructor() {
    let quality_roll = Math.floor(Math.random() * (2 - 0) + 0);
    if(quality_roll === 0){
      this.quality = true;
    } else {
      this.quality = false;
    }
  }
}

class Mango extends Fruit{
  // Produce a mango
  constructor() {
    super();
  }
}

class Apple extends Fruit{
  constructor() {
    super();
  }
}

//driver code untuk release 0
let mangoTree = new MangoTree()
let appleTree = new AppleTree()
do {
  mangoTree.grow();
  appleTree.grow();
  mangoTree.produceMangoes();
  appleTree.produceApples();
  mangoTree.harvest();
  console.log(`Mango : [Year ${mangoTree.age} Report] Height = ${mangoTree.height} Meter| Fruits harvested = ${mangoTree.harvested} (${mangoTree.good} good, ${mangoTree.bad} bad)`);
  appleTree.harvest();
  console.log(`Apple : [Year ${appleTree.age} Report] Height = ${appleTree.height} Meter| Fruits harvested = ${appleTree.harvested} (${appleTree.good} good, ${appleTree.bad} bad) \n`);
} while (mangoTree.healthyStatus != false)
