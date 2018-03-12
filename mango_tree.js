"use strict"

class FruitTree {
  constructor(){
    this._healthyStatus = true;
    this._harvested = null;
    this._fruits = 0;
    this._goodQuality = 0;
    this._badQuality = 0;
    this._age =0
    this._height =0;
    this._maxAge = 10;
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

  grow() {
    this._age = this._age + 1;
    if(this._age<=this._maxAge){
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
  produceFruits() {

    let totalFruits = [];

    let totalProduce = Math.floor(Math.random()*Math.floor(8))+1;
    for(let i=totalProduce;i>0;i--){
      let qualityRandom = Math.random();
      if(qualityRandom>=0.5){
        let quality = 'good';
        let fruits = new Fruit(quality);
        totalFruits.push(fruits);
      }
      else{
        let quality = 'bad';
        let fruits = new Fruit(quality);
        totalFruits.push(fruits);
      }
    }

    return totalFruits;
  }

  harvest() {
    let totalFruits = this.produceFruits();
    this._harvested = totalFruits.length;
    this._goodQuality =0;
    this._badQuality =0;
    for(let i=0;i<totalFruits.length;i++){
      if(totalFruits[i].quality == 'good'){
        this._goodQuality++;
      }
      else{
        this._badQuality++
      }
    }
  }
}
class Fruit {
  constructor(quality) {
    this.quality = quality;
  }
}

class MangoTree extends FruitTree{
  constructor(maxAge){
    super(maxAge);
    this._maxAge = maxAge
  }
}
class Mango extends Fruit{
  constructor(quality){
    this.quality = quality;
  }
}

class AppleTree extends FruitTree{
  constructor(diameter){
    super();
    this._diameter = diameter;
  }
  get diameter(){
    let growDiameter = Math.floor(Math.random()*Math.floor(9))+1;
    this._diameter = this._diameter + growDiameter/10;
    return this._diameter.toFixed(1);
  }
}
class Apple extends Fruit{
  constructor(quality){
    this.quality = quality;
  }
}
/*class MangoTree {

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

    let totalMangos = [];

    let totalProduce = Math.floor(Math.random()*Math.floor(8))+1;
    for(let i=totalProduce;i>0;i--){
      let qualityRandom = Math.random();
      if(qualityRandom>=0.5){
        let quality = 'good';
        let mango = new Mango(quality);
        totalMangos.push(mango);
      }
      else{
        let quality = 'bad';
        let mango = new Mango(quality);
        totalMangos.push(mango);
      }
    }

    return totalMangos;
  }

  // Get some fruits
  harvest() {
    let totalMangos = this.produceMangoes();
    this._harvested = totalMangos.length;
    this._goodQuality =0;
    this._badQuality =0;
    for(let i=0;i<totalMangos.length;i++){
      if(totalMangos[i].quality == 'good'){
        this._goodQuality++;
      }
      else{
        this._badQuality++
      }
    }
  }

}

class Mango {
  // Produce a mango
  constructor(quality) {
    this.quality = quality;
  }
}*/

/**
  * driver code untuk release 0*/
  let mangoTree = new MangoTree(15)
  do {
    mangoTree.grow();
    mangoTree.produceFruits();
    mangoTree.harvest();
    console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested} (${mangoTree.goodQuality} good, ${mangoTree.badQuality} bad)`)
    } while (mangoTree.healthyStatus != false)


// Release 1
/*class AppleTree {

    // Initialize a new MangoTree
    constructor() {
      this._age = 0;
      this._diameter = 0;
      this._healthyStatus = true;
      this._harvested = null;
      this._fruits = null;
      this._goodQuality = 0;
      this._badQuality = 0;
    }

    get age() {
      return this._age
    }

    get diameter() {
      return this._diameter.toFixed(1)
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
        let growDiameter = Math.floor(Math.random()*Math.floor(9))+1;
        this._diameter = this._diameter + growDiameter/10;
      }
      else{
        this._diameter = this._diameter;
      }
      if(this._age>19){
        this._healthyStatus = false;
      }
    }

    produceApples() {

      let totalApples = [];

      let totalProduce = Math.floor(Math.random()*Math.floor(8))+1;
      for(let i=totalProduce;i>0;i--){
        let qualityRandom = Math.random();
        if(qualityRandom>=0.5){
          let quality = 'good';
          let apple = new Apple(quality);
          totalApples.push(apple);
        }
        else{
          let quality = 'bad';
          let apple = new Apple(quality);
          totalApples.push(apple);
        }
      }

      return totalApples;
    }

    // Get some fruits
    harvest() {
      let totalApples = this.produceApples();
      this._harvested = totalApples.length;
      this._goodQuality =0;
      this._badQuality =0;
      for(let i=0;i<totalApples.length;i++){
        if(totalApples[i].quality == 'good'){
          this._goodQuality++;
        }
        else{
          this._badQuality++
        }
      }
    }
}
class Apple {
  constructor(quality) {
    this.quality = quality;
  }
}
*/
let appleTree = new AppleTree(0.2)
do {
  appleTree.grow();
  appleTree.produceFruits();
  appleTree.harvest();
  console.log(`[Year ${appleTree.age} Report] Diameter = ${appleTree.diameter} | Fruits harvested = ${appleTree.harvested} (${appleTree.goodQuality} good, ${appleTree.badQuality} bad)`)
} while (appleTree.healthyStatus != false)
