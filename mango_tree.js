"use strict"

// Release 2
class FruitTree {
  constructor(maxAge, maxHeight, nameOfFruit){
    this._age = 0;
    this._height = 0;
    this._fruits = [];
    this._healthyStatus = true;
    this._maxAge = Math.round(Math.random() * 4) + maxAge;
    this._maxHeight = Math.round(Math.random() * 4) + maxHeight;
    this.nameOfFruit = nameOfFruit
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
    this._fruits = [];
    return result;
  }

  produceFruits() {
    let totalFruit = Math.round(Math.random()*8);
    for(let loop = 0; loop<totalFruit; loop++){
      if(this.nameOfFruit === 'Mango'){
        let buah = new Mango;
        this._fruits.push(buah);
      }else if(this.nameOfFruit === 'Apple'){
        let buah = new Apple;
        this._fruits.push(buah);
      }
    }
  }

  grow() {
    this._age++;
    this._height = this._height + Math.floor(Math.random()*2) + 1;
    
    if(this._age >= this._maxAge || this._height >= this._maxHeight){
      this._healthyStatus = false;
    }
    
  }
 
}
class Fruit {
  constructor() {
    this._fruitQuality = Math.round(Math.random());
  }

  get fruitQuality(){
    return this._fruitQuality;
  }
}

// release 0

class MangoTree extends FruitTree{

  // Initialize a new MangoTree
  constructor() {
    super(20, 24, 'Mango');
  }

}

class Mango extends Fruit{
  // Produce a mango
  constructor() {
    super();
  }
}

class AppleTree extends FruitTree{

  // Initialize a new MangoTree
  constructor() {
    super(25, 28, 'Apple');
  }

}

class Apple extends Fruit{
  // Produce a mango
  constructor() {
    super();
  }
}

class PearTree extends FruitTree{

  // Initialize a new MangoTree
  constructor() {
    super(15, 20, 'Pear');
  }

}

class Pear extends Fruit{
  // Produce a mango
  constructor() {
    super();
  }
}

// var testing = new MangoTree;
//   testing.grow();
//   testing.produceFruits();
//   testing.harvest();


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

console.log('MANGO TREE');


let mangoTree = new MangoTree()
console.log('The tree is alive! :smile:');
  do {
    mangoTree.grow();
    mangoTree.produceFruits('Mango');
    mangoTree.harverst;
    console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} m | Fruits harvested = ${mangoTree.harvested}`)
    debugger;
  } while (mangoTree.healthyStatus != false)
console.log('The tree has met its end. :sad:');
 
console.log('\n===================================================================================\n');
console.log('APPLE TREE')

let appleTree = new AppleTree()
console.log('The tree is alive! :smile:');
  do {
    appleTree.grow();
    appleTree.produceFruits('Mango');
    appleTree.harverst;
    console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} m | Fruits harvested = ${appleTree.harvested}`)
    debugger;
  } while (appleTree.healthyStatus != false)
console.log('The tree has met its end. :sad:');


// Release 1
// class AppleTree extends FruitTree{
//   constructor() {
//     this._healthyStatus = true;
//     this._maxAge = Math.round(Math.random() * 4) + 25;
//     this._maxHeight = Math.round(Math.random() * 4) + 30;
//   }

//   get age() {
//     return this._age;
//   }

//   get height() {
//     return this._height;
//   }

//   get fruits() {
//     return this._fruits;
//   }

//   get healthyStatus() {
//     return this._healthyStatus;
//   }

//   get harvested() {
//     return this.harvest()
//   }


//   // Get current states here

//   // Grow the tree
//   grow() {
//     this._age++;
//     this._height = this._height + Math.floor(Math.random()*2) + 1;
    
//     if(this._age >= this._maxAge || this._height >= this._maxHeight){
//       this._healthyStatus = false;
//     }
    
//   }

//   // Produce some apples
//   produceApples() {
//     let totalFruit = Math.round(Math.random()*8);
//     for(let loop = 0; loop<totalFruit; loop++){
//       let buah = new Apple;
//       this._fruits.push(buah);
//     }
//   }

//   // Get some fruits
//   harvest() {
//     let good =0;
//     let bad =0;
//     for(let indexFruit = 0; indexFruit<this._fruits.length; indexFruit++){
//       if(this._fruits[indexFruit].fruitQuality === 0){
//         good++;
//       }else{
//         bad++;
//       }
//     }
    
//     let result = `${this._fruits.length} (${good} good, ${bad} bad)`;
//     return result;
//   }

// }

// class Apple {
//   constructor() {
//     this._fruitQuality = Math.round(Math.random());
//   }

//   get fruitQuality(){
//     return this._fruitQuality;
//   }
// }


