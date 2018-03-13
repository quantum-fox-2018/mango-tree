"use strict"

class FruitTree {
  constructor(firstFruit, maxAge) {
    this._age = 0;
    this._maxAge = maxAge;
    this._firstFruit = firstFruit;
    this._height = 0;
    this._fruits = [];
    this._healtyStatus = true;
    this._harvested = 0;
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

  get healtyStatus() {
    return this._healtyStatus;
  }

  get harvested() {
    return this._fruits.length;
  }

  grow() {
    this._age += 1;
    this._fruits = [];

    // mati diusia 30
    if(this._age >= this._maxAge){
      this._healtyStatus = false;
    }

    // tinggi bertambah setiap tahun
    this._height += (Math.random()*1);
  }

  produceFruit(fruitNames) {
    if(this._age >= this._firstFruit){
        let produceRandom = Math.floor(Math.random()*10+5);
        for(let i=0; i<produceRandom; i++){
            let fruitz;
            if(fruitNames == 'mango'){
                fruitz = new Mango();
            } else if(fruitNames == 'apple') {
                fruitz = new Apple();
            } else if(fruitNames == 'pear'){
                fruitz = new Pear();
            }
            this._fruits.push(fruitz)
        }
    }
  }

  // Get some fruits
  harvest() {
    let countGood = 0;
    let countBad = 0;
    for(let i=0; i<this._fruits.length; i++){
      if(this._fruits[i].quality == 'good'){
        countGood++;
      } else {
        countBad++;
      }
      this._harvested++;
    }
    return `(${countGood} good, ${countBad} bad)`;
  }
}

class MangoTree extends FruitTree{
    constructor(firstFruit, maxAge){
        super(firstFruit, maxAge)
        this._jenis = 'harum manis'
    }
}

class AppleTree extends FruitTree{
    constructor(firstFruit, maxAge){
        super(firstFruit, maxAge)
        this._color = 'red'
    }
}

class PearTree extends FruitTree{
    constructor(firstFruit, maxAge){
        super(firstFruit, maxAge)
        
    }
}

class Fruit {
    constructor() {
        this.quality = this.randomQuality();
    }
    randomQuality(){
        let valueRandom = Math.floor(Math.random()*2)
        if(valueRandom == 1){
            return 'good';
        } else {
            return 'bad'
        }
    }
}
  
class Mango extends Fruit{
    constructor() {
        super()
    }
}

class Apple extends Fruit {
    constructor() {
        super()
    }
}

class Pear extends Fruit {
    constructor(){
        super()
    }
}

// console.log(`The tree is alive! :smile:`);
// DRIVER CODE FRUIT TREE
// driver code untuk release 0
// let fruitTree = new FruitTree()
// do {
//   fruitTree.grow();
//   fruitTree.produceFruit();
//   fruitTree.harvest();
//   console.log(`[Year ${fruitTree.age} Report] Height = ${fruitTree.height} m | Fruits harvested = ${fruitTree.harvested} ${fruitTree.harvest()}`)
// } while (fruitTree.healtyStatus != false)

// console.log(`The tree has met its end. :sad:`);


let mangga = new MangoTree(3, 10)
console.log(`The tree is alive! :smile:`);
do {
    mangga.grow();
    mangga.produceFruit('mango');
    mangga.harvest();
    console.log(`[Year ${mangga.age} Report] Height = ${mangga.height} m | Fruits harvested = ${mangga.harvested} ${mangga.harvest()}`)
} while (mangga.healtyStatus != false)
console.log(`The tree has met its end. :sad:`);



let apel = new AppleTree(3, 5)
console.log(`The tree is alive! :smile:`);
do {
    apel.grow();
    apel.produceFruit('apple');
    apel.harvest();
    console.log(`[Year ${apel.age} Report] Height = ${apel.height} m | Fruits harvested = ${apel.harvested} ${apel.harvest()}`)
} while (apel.healtyStatus != false)
console.log(`The tree has met its end. :sad:`);


let pear = new AppleTree(2, 5)
console.log(`The tree is alive! :smile:`);
do {
    pear.grow();
    pear.produceFruit('pear');
    pear.harvest();
    console.log(`[Year ${pear.age} Report] Height = ${pear.height} m | Fruits harvested = ${pear.harvested} ${pear.harvest()}`)
} while (pear.healtyStatus != false)
console.log(`The tree has met its end. :sad:`);