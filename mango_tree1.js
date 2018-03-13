"use strict"

// release 0
class FruitTree {
  // Initialize a new MangoTree
  constructor(newObjTree) {
    this._age = newObjTree.age;
    this._height = newObjTree.height;
    this._max_fruit = newObjTree.max_fruit;
    this._current_fruit = newObjTree.current_fruit;
    this._picked_fruit = newObjTree.picked_fruit;
    this._status = newObjTree.status;
    this._mature_age = newObjTree.mature_age;
    this._dying_age = newObjTree.dying_age;
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
    return this._current_fruit;
  }

  get healtyStatus() {
    return this._status;
  }

  get harvested() {
    return this._picked_fruit;
  }

  get goodFruit() {
    return this._good;
  }

  get badFruit() {
    return this._bad;
  }

  // Get current states here

  // Grow the tree
  grow() {
    let mature_age = this._mature_age;
    let dying_age = this._dying_age;

    if (this._age < dying_age && this.age <= mature_age) {
      this._age += 1;
      this._height += 1; //dalam meter
    } else if (this._age < dying_age && this._age > mature_age) {
      this._age += 1;
    } else {
      this._status = false;
    }
  }

  // Produce some mangoes
  produceFruites() {
    let mature_age = this._mature_age;
    let dying_age = this._dying_age;

    if (this._age < dying_age && this.age <= mature_age) {
      this._current_fruit += 0;
    } else if (this._age < dying_age && this._age > mature_age) {
      this._current_fruit = Math.floor(Math.random()*51);
    } else {
      this._status = false;
    }

  }

  // Get some fruits
  harvest() {
    let mature_age = this._mature_age;
    let dying_age = this._dying_age;
    
    if (this._age < dying_age && this.age <= mature_age) {
      this._picked_fruit += 0;

    } else if (this._age < dying_age && this._age > mature_age) {
      let maxHarvest = this.fruits; // jumlah max petik

      let fruitBascket = [];
      let countFruitGood = 0; 
      let countFruitBad = 0; 
      
      for (let i = 0; i < maxHarvest; i++) {
        let newFruit = new Fruit();
        fruitBascket.push(newFruit);
      }

      for (let i = 0; i < fruitBascket.length; i++) {
        if (fruitBascket[i]._quality == 'good') {
          countFruitGood++;
        } else {
          countFruitBad++;
        }
      }

      this._good = countFruitGood;
      this._bad = countFruitBad;

    } else {
      this._status = false;
    }

  }

}

class MangoTree extends FruitTree {

} 

class AppleTree extends FruitTree {

}

class PearTree extends FruitTree {

}

class Fruit {
  constructor() {
    // this._quality = quality;
    this._quality = this.checkQuality();
  }

  checkQuality() {
    let checkFruit = Math.floor(Math.random()*2); // 0 good, 1 bad
    if (checkFruit == 0) {
      return 'good';
    } else {
      return 'bad';
    }    
  }

}
let newObjMangoTree = {
  age: 0,
  height: 0,
  max_fruit: 1000,
  current_fruit: 0,
  picked_fruit: 0,
  status: true,
  mature_age: 4,
  dying_age: 10
}
let mangoTree = new MangoTree(newObjMangoTree);
console.log('=======================MangoTree===========================');
do {
  mangoTree.grow();
  mangoTree.produceFruites();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height}m | Fruits harvested = ${mangoTree.goodFruit+mangoTree.badFruit} (${mangoTree.goodFruit} good, ${mangoTree.badFruit} bad)`)
} while (mangoTree.healtyStatus == true)


// Release 1
let newObjAppleTree = {
  age: 0,
  height: 0,
  max_fruit: 1000,
  current_fruit: 0,
  picked_fruit: 0,
  status: true,
  mature_age: 2,
  dying_age: 10
}
let appleTree = new AppleTree(newObjAppleTree);
console.log('=======================AppleTree===========================');
do {
  appleTree.grow();
  appleTree.produceFruites();
  appleTree.harvest();
  console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height}m | Fruits harvested = ${appleTree.goodFruit+appleTree.badFruit} (${appleTree.goodFruit} good, ${appleTree.badFruit} bad)`)
} while (appleTree.healtyStatus == true)

// Release 2
let newObjPearTree = {
  age: 0,
  height: 0,
  max_fruit: 1000,
  current_fruit: 0,
  picked_fruit: 0,
  status: true,
  mature_age: 7,
  dying_age: 20
}
let pearTree = new PearTree(newObjPearTree);
console.log('=======================PearTree===========================');
do {
  pearTree.grow();
  pearTree.produceFruites();
  pearTree.harvest();
  console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height}m | Fruits harvested = ${pearTree.goodFruit+pearTree.badFruit} (${pearTree.goodFruit} good, ${pearTree.badFruit} bad)`)
} while (pearTree.healtyStatus == true)