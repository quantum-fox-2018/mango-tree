class FruitTree {
    constructor(growPerYear, endOfGrow, ageProduce, fruitCapacity,fruitName) {
      this.growPerYear = growPerYear
      this.oldAge = endOfGrow
      this.matureAge = ageProduce
      this.fruitCapacity = fruitCapacity
      this.fruitName = fruitName
      this._age = 0
      this._height = 0
      this._fruitStock = 0
      this._pickedFruits = []
      this._fruitStat = []
      this._healthyStatus = true
      this._maxAge =15
    }
    get age() {
      return this._age
    }

    get height() {
      return this._height
    }

    get fruits() {
      return this._fruitStock
    }

    get healtyStatus() {
      return this._healthyStatus
    }

    get harvested() {
      return this._pickedFruits
    }

    get fruitcap() {
      return this._fruitCapacity
    }
    get fruitname(){
      return this.fruitName
    }

    grow() {

      if (this._age <= this._maxAge) {
        this._age ++
      }
      if (this._age <= this.oldAge) {
        this._height += this.growPerYear
      } /*Math.floor(Math.random()*3)*/
      if (this._age >= this.matureAge) {
        this.produce()
      }
      if (this._age === this._maxAge) {
        this._healthyStatus = false
      }
    }

    // Produce some mangoes
    produce() {

      this._fruitStock = Math.floor(Math.random()* this.fruitCapacity)+2
  //    console.log(this._fruitStock , this.fruitCapacity)
      var fruitStat = [];
      for (var i = 0; i < this._fruitStock; i++) {
        let randomQual = Math.floor(Math.random()*2)
  //      console.log(randomQual)
        if (randomQual === 0) {
          fruitStat.push(0)
        } else {
          fruitStat.push(1)
        }
      }
  //    console.log('produksi', fruitStat)
      this._fruitStat =  fruitStat
    }


    // Get some fruits
    harvest() {
        var cekBuah = this._fruitStat
        var counterBad = 0;
        var counterGood = 0;
  //      console.log(cekBuah)
        for(var i=0; i < cekBuah.length; i++){
          let stat = new Fruit(cekBuah[i])
          let cekstat = stat.statqual()
  //        console.log(cekstat)
            if(cekstat === 'good'){
              counterGood += 1
            } else {
              counterBad += 1
            }
        }
        this._pickedFruits = `${this._fruitStock} (${counterGood} good, ${counterBad} bad)`;
      }
  }



//
class Fruit {
  // Produce a mango
  constructor(quality) {
    this._quality = quality
  }
  statqual(){
//    console.log('quality',this._quality);
    if(this._quality === 1){
      return "good"
    }else{
      return "bad"
    }
  }
}
// class MangoTree extends FruitTree(){
//
//   // Initialize a new MangoTree
//   constructor(growPerYear, endOfGrow, ageProduce, fruitCapacity, fruitName) {
//     super(growPerYear, endOfGrow, ageProduce, fruitCapacity, fruitName)
//   }
// }
class MangoTree extends FruitTree{
  constructor(growPerYear, endOfGrow, ageProduce, fruitCapacity, fruitName){
      super(growPerYear, endOfGrow, ageProduce, fruitCapacity, fruitName)
  }
}

class AppleTree extends FruitTree{
  constructor(growPerYear, endOfGrow, ageProduce, fruitCapacity, fruitName){
      super(growPerYear, endOfGrow, ageProduce, fruitCapacity, fruitName)
  }
}

class KecubungTree extends FruitTree{
  constructor(growPerYear, endOfGrow, ageProduce, fruitCapacity, fruitName){
      super(growPerYear, endOfGrow, ageProduce, fruitCapacity, fruitName)
  }
}

class MengkuduTree extends FruitTree{
  constructor(growPerYear, endOfGrow, ageProduce, fruitCapacity, fruitName){
      super(growPerYear, endOfGrow, ageProduce, fruitCapacity, fruitName)
  }
}

console.log(`The tree is alive! :smile:`)
let mengkuduTree = new MengkuduTree(0.5,10,4,10,'mengkudu')
do {
mengkuduTree.grow();
// mengkuduTree.produceMangoes();
mengkuduTree.harvest();
// console.log(mengkuduTree.harvested);
console.log(`[Year ${mengkuduTree.age} Report] Height = ${mengkuduTree.height} m | Fruits ${mengkuduTree.fruitname} harvested = ${mengkuduTree.harvested}`)
} while (mengkuduTree.healtyStatus != false)
console.log(`The has met its end. :sad:`)

console.log(`The tree is alive! :smile:`)
let kecubung = new KecubungTree(0.5,10,4,10,'kecubung')
do {
kecubung.grow();
// kecubung.produceMangoes();
kecubung.harvest();
// console.log(kecubung.harvested);
console.log(`[Year ${kecubung.age} Report] Height = ${kecubung.height} m | Fruits ${kecubung.fruitname} harvested = ${kecubung.harvested}`)
} while (kecubung.healtyStatus != false)
console.log(`The has met its end. :sad:`)
  // Get current states here

  // Grow the tree


  // * driver code untuk release 0
  //console.log(`The tree is alive! :smile:`)
  // let mangoTree = new MangoTree()
  // do {
  // mangoTree.grow();
  // // mangoTree.produceMangoes();
  // mangoTree.harvest();
  // // console.log(mangoTree.harvested);
  // console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} m | Fruits harvested = ${mangoTree.harvested}`)
  // } while (mangoTree.healtyStatus != false)
  // console.log(`The has met its end. :sad:`)
// console.log(mangoTree.harvest());

// // Release 1
// class AppleTree {}
// class Apple {}
//
// // Release 2
// class FruitTree {}
// class Fruit {}
