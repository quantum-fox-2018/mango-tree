"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this._age           = 0;
    this._height        = 0;
    this._totalFruit    = 0;
    this._harvested     = 0;
    this._healthyStatus = true;
    this._list_fruit    = []
  }

  get age() {
    return this._age;
  }

  get height() {
    return this._height;
  }

  get fruits() {
    return this._totalFruits;
  }

  get healtyStatus() {
    return this.healthyStatus;
  }

  get harvested() {
    return this._harvested;
  }


  // Get current states here

  // Grow the tree
  grow() {
    let randomNum = Math.round(Math.random()*10);
    this._age     = this._age + 1;

    if(this._age <= 10){
      this._height  = this._height + randomNum;
    }

    if(this._age >= 20){
      this.healthyStatus = false;
    }
  }

  // Produce some mangoes
  produceMangoes() {
    this._list_fruit = []
    if (this._age >= 5){
      this._totalFruit = Math.round(Math.random()*8 + 1);

      for(let i=0; i<this._totalFruit; i++) {
        let mango = new Mango();
        this._list_fruit.push(mango)
      }
    }
  }

  // Get some fruits
  harvest() {
   let arrQuality  = [];
   let good        = 0;
   let bad         = 0;

    for(var i = 0; i < this._list_fruit.length; i++){
      if(this._list_fruit[i].quality === 'good'){
        good += 1;
      } else {
        bad += 1;
      }
    }
    arrQuality.push(`${good} good`);
    arrQuality.push(`${bad} bad`);
    this._harvested = `${this._totalFruit} (${arrQuality})`;
  }

}

class Mango {
  // Produce a mango
  constructor() {
    this.quality = this.mangoQuality()
  }

  mangoQuality(){
    let random  = Math.round(Math.random());
    if(random === 0){
      return 'good';
    } else {
      return 'bad';
    }
  }

}


// //* driver code untuk release 0
// console.log(`The tree is alive! :smile:`);
// let mangoTree = new MangoTree()
// do {
//   mangoTree.grow();
//   mangoTree.produceMangoes();
//   mangoTree.harvest();
//   //console.log('-----', mangoTree)
//   console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} m | Fruits harvested = ${mangoTree.harvested}`)
// } while (mangoTree.healthyStatus != false)
// console.log(`The tree has met its end. :sad:`);


// Release 1
class AppleTree {
  constructor() {
    this._age           = 0;
    this._height        = 0;
    this._totalFruit    = 0;
    this._harvested     = 0;
    this._healthyStatus = true;
    this._list_fruit    = []
  }

  get age() {
    return this._age;
  }

  get height() {
    return this._height;
  }

  get fruits() {
    return this._totalFruits;
  }

  get healtyStatus() {
    return this.healthyStatus;
  }

  get harvested() {
    return this._harvested;
  }

  grow() {
    let randomNum = Math.round(Math.random()*10);
    this._age     = this._age + 1;

    if(this._age <= 5){
      this._height  = this._height + randomNum;
    }

    if(this._age >= 10){
      this.healthyStatus = false;
    }
  }

  // Produce some Apples
  produceApples() {
    this._list_fruit = []
    if (this._age >= 3){
      this._totalFruit = Math.round(Math.random()*8 + 1);

      for(let i=0; i<this._totalFruit; i++) {
        let apple = new Apple();
        this._list_fruit.push(apple)
      }
    }
  }

  // Get some fruits
  harvest() {
   let arrQuality  = [];
   let good        = 0;
   let bad         = 0;

    for(var i = 0; i < this._list_fruit.length; i++){
      if(this._list_fruit[i].quality === 'good'){
        good += 1;
      } else {
        bad += 1;
      }
    }
    arrQuality.push(`${good} good`);
    arrQuality.push(`${bad} bad`);
    this._harvested = `${this._totalFruit} (${arrQuality})`;
  }

}
class Apple {
  constructor() {
    this.quality = this.appleQuality()
  }

  appleQuality(){
    let random  = Math.round(Math.random());
    if(random === 0){
      return 'good';
    } else {
      return 'bad';
    }
  }
}

// console.log(`The tree is alive! :smile:`);
// let appleTree = new AppleTree()
// do {
//   appleTree.grow();
//   appleTree.produceApples();
//   appleTree.harvest();
//   console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} m | Fruits harvested = ${appleTree.harvested}`)
// } while (appleTree.healthyStatus != false)
// console.log(`The tree has met its end. :sad:`);

// Release 2
"use strict"

class FruitTree {
  constructor(name, maxAge, maxGrow, mature) {
    this.name           = name;    //nama pohon
    this.maxAge         = maxAge;  //umur maksimal pohon
    this.maxGrow        = maxGrow; //umur ketika tinggi pohon berhenti bertambah
    this.mature         = mature;  //umur ketika pohon berbuah
    this._age           = 0;
    this._height        = 0;
    this._totalFruit    = 0;
    this._harvested     = 0;
    this._healthyStatus = true;
    this._list_fruit    = []
  }

  get age() {
    return this._age;
  }

  get height() {
    return this._height;
  }

  get fruits() {
    return this._totalFruits;
  }

  get healtyStatus() {
    return this.healthyStatus;
  }

  get harvested() {
    return this._harvested;
  }

  grow() {
    let randomNum = Math.round(Math.random()*10);
    this._age     = this._age + 1;

    if(this._age <= this.maxGrow){
      this._height  = this._height + randomNum;
    }

    if(this._age >= this.maxAge){
      this.healthyStatus = false;
    }
  }

  produceFruits() {
    this._list_fruit = []
    if (this._age >= this.mature){
      this._totalFruit = Math.round(Math.random()*8 + 1);

      for(let i=0; i<this._totalFruit; i++) {
        let fruit = new Fruit ();
        this._list_fruit.push(fruit)
      }
    }
  }

  // Get some fruits
  harvest() {
   let arrQuality  = [];
   let good        = 0;
   let bad         = 0;

    for(var i = 0; i < this._list_fruit.length; i++){
      if(this._list_fruit[i].quality === 'good'){
        good += 1;
      } else {
        bad += 1;
      }
    }
    arrQuality.push(`${good} good`);
    arrQuality.push(`${bad} bad`);
    this._harvested = `${this._totalFruit} (${arrQuality})`;
  }
}

class Fruit {
  constructor() {
    this.quality = this.fruitQuality()
  }

  fruitQuality(){
    let random  = Math.round(Math.random());
    if(random === 0){
      return 'good';
    } else {
      return 'bad';
    }
  }
}

//Pear Tree
class PearTree extends FruitTree {
  constructor(name, maxAge, maxGrow, mature){
    super(name, maxAge, maxGrow, mature);
  }
}

class Pear extends Fruit {
  constructor(){
    super();
  }
}


let pearTree = new PearTree('Pear', 10, 5, 3);
console.log(`The ${pearTree.name} tree is alive! :smile:`);
do {
  pearTree.grow();
  pearTree.produceFruits();
  pearTree.harvest();
  console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height} m | Fruits harvested = ${pearTree.harvested}`)
} while (pearTree.healthyStatus != false)
console.log(pearTree);
console.log(`The tree has met its end. :sad:`);
