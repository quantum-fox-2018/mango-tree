"use strict"

// release 0
class FruitTree {
  // Initialize a new MangoTree
  constructor(age,height,max_fruit,current_fruit,picked_fruit,status) {
    this._age = age;
    this._height = height;
    this._max_fruit = max_fruit;
    this._current_fruit = current_fruit;
    this._picked_fruit = picked_fruit;
    this._status = status;
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
    let mature_age = 4;
    let dying_age = 10;

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
    let mature_age = 4;
    let dying_age = 10;

    if (this._age < dying_age && this.age <= mature_age) {
      this._current_fruit += 0;
    } else if (this._age < dying_age && this._age > mature_age) {
      this._current_fruit = Math.floor(Math.random()*16);
    } else {
      this._status = false;
    }

  }

  // Get some fruits
  harvest() {
    let mature_age = 4;
    let dying_age = 10;
    
    if (this._age < dying_age && this.age <= mature_age) {
      this._picked_fruit += 0;
    } else if (this._age < dying_age && this._age > mature_age) {
      let maxHarvest = this.fruits; // jumlah max petik

      let fruitBascket = [];
      let countFruitGood = 0; 
      let countFruitBad = 0; 
      
      for (let i = 0; i < maxHarvest; i++) {
        let checkFruit = Math.floor(Math.random()*2); // 0 good, 1 bad
        if (checkFruit == 0) {
          let newMango = new Fruit('good');
          fruitBascket.push(newMango);
        } else {
          let newMango = new Fruit('bad');
          fruitBascket.push(newMango);
        }
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
  constructor(quality) {
    this._quality = quality;
  }
}

let mangoTree = new MangoTree(0,0,1000,0,0,true);
console.log('=======================MangoTree===========================');
do {
  mangoTree.grow();
  mangoTree.produceFruites();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height}m | Fruits harvested = ${mangoTree.goodFruit+mangoTree.badFruit} (${mangoTree.goodFruit} good, ${mangoTree.badFruit} bad)`)
} while (mangoTree.healtyStatus == true)


// Release 1
let appleTree = new AppleTree(0,0,1000,0,0,true);
console.log('=======================AppleTree===========================');
do {
  appleTree.grow();
  appleTree.produceFruites();
  appleTree.harvest();
  console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height}m | Fruits harvested = ${appleTree.goodFruit+appleTree.badFruit} (${appleTree.goodFruit} good, ${appleTree.badFruit} bad)`)
} while (appleTree.healtyStatus == true)

// Release 2
let pearTree = new PearTree(0,0,1000,0,0,true);
console.log('=======================PearTree===========================');
do {
  pearTree.grow();
  pearTree.produceFruites();
  pearTree.harvest();
  console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height}m | Fruits harvested = ${pearTree.goodFruit+pearTree.badFruit} (${pearTree.goodFruit} good, ${pearTree.badFruit} bad)`)
} while (pearTree.healtyStatus == true)