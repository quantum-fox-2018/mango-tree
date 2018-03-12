"use strict"

// release 0
class MangoTree {
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
  produceMangoes() {
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
          let newMango = new Mango('good');
          fruitBascket.push(newMango);
        } else {
          let newMango = new Mango('bad');
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

class Mango {
  // Produce a mango
  constructor(quality) {
    this._quality = quality;
  }
}

let mangoTree = new MangoTree(0,0,1000,0,0,true);


do {
  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height}m | Fruits harvested = ${mangoTree.goodFruit+mangoTree.badFruit} (${mangoTree.goodFruit} good, ${mangoTree.badFruit} bad)`)
} while (mangoTree.healtyStatus == true)


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
