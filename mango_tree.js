"use strict"

class FruitTree {
  constructor(){
    this._healthyStatus = true;
    this._harvested = null;
    this._fruits = 10;
    this._goodQuality = 0;
    this._badQuality = 0;
    this._age = 0;
    this._height =null;
    this.deadAge = 20;
    this.matureAge = 5
    this.growthHeight = 10;
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
    if(this._age<=this.matureAge){
      let growHeight = Math.floor(Math.random()*Math.floor(this.growthHeight))+1;
      this._height = this._height + growHeight/10;
    }
    else{
      this._height = this._height;
    }
    if(this._age>this.deadAge){
      this._healthyStatus = false;
    }
  }

  produceFruits() {

    let totalFruits = [];

    if(this._age>=this.matureAge){
      let totalProduce = this._fruits - Math.floor(Math.random()*Math.floor(8))+1;
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
  constructor(initialAge,matureAge,deadAge,totalNormalFruits,growHeight){
    super();
    this.deadAge = deadAge;
    this.initialAge = initialAge;
    this.matureAge = matureAge;
    this.totalNormalFruits = totalNormalFruits;
    this.growHeight = growHeight;
  }
}
class Mango extends Fruit{
  constructor(quality){
    this.quality = quality;
  }
}

class AppleTree extends FruitTree{
  constructor(initialAge,matureAge,deadAge,totalNormalFruits,growHeight){
    super();
    this.deadAge = deadAge;
    this.initialAge = initialAge;
    this.matureAge = matureAge;
    this.totalNormalFruits = totalNormalFruits;
    this.growHeight = growHeight;
  }
}
class Apple extends Fruit{
  constructor(quality){
    this.quality = quality;
  }
}

let mangoTree = new MangoTree(0,7,20,8,20)//initialAge,matureAge,deadAge,totalNormalFruits,growHeight
  console.log('---------------------------Mango Tree------------------------------');
do {
  mangoTree.grow();
  mangoTree.produceFruits();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested} (${mangoTree.goodQuality} good, ${mangoTree.badQuality} bad)`)
  } while (mangoTree.healthyStatus != false)



let appleTree = new AppleTree(0,5,15,15,10)
  console.log('---------------------------Apple Tree------------------------------');
do {
  appleTree.grow();
  appleTree.produceFruits();
  appleTree.harvest();
  console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested = ${appleTree.harvested} (${appleTree.goodQuality} good, ${appleTree.badQuality} bad)`)
} while (appleTree.healthyStatus != false)



class PearTree extends FruitTree{
  constructor(initialAge,matureAge,deadAge,totalNormalFruits,growHeight){
    super();
    this.deadAge = deadAge;
    this.initialAge = initialAge;
    this.matureAge = matureAge;
    this.totalNormalFruits = totalNormalFruits;
    this.growHeight = growHeight;
  }
}
class Pear extends Fruit{
  constructor(quality){
    this.quality = quality;
  }
}

let pearTree = new PearTree(1,7,25,30,15)
  console.log('---------------------------Pear Tree------------------------------');
do {
  pearTree.grow();
  pearTree.produceFruits();
  pearTree.harvest();
  console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height} | Fruits harvested = ${pearTree.harvested} (${pearTree.goodQuality} good, ${pearTree.badQuality} bad)`)
} while (pearTree.healthyStatus != false)
