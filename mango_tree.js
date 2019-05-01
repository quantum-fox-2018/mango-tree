class MangoTree {
    constructor() {
      this.growPerYear = 0.5
      this.oldAge = 10
      this.matureAge = 4
      this.fruitCapacity = 9
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
          let stat = new Mango(cekBuah[i])
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
class Mango {
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


  // * driver code untuk release 0
  console.log(`The  mango tree is alive! :smile:`)
  let mangoTree = new MangoTree()
  do {
  mangoTree.grow();
  // mangoTree.produceMangoes();
  mangoTree.harvest();
  // console.log(mangoTree.harvested);
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} m | Fruits harvested = ${mangoTree.harvested}`)
  } while (mangoTree.healtyStatus != false)
  console.log(`The mango tree has met its end. :sad:`)
// console.log(mangoTree.harvest());

// // Release 1
// class AppleTree {}
// class Apple {}
class AppleTree {
    constructor() {
      this.growPerYear = 1.5
      this.oldAge = 10
      this.matureAge = 4
      this.fruitCapacity = 9
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
          let stat = new Mango(cekBuah[i])
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
class Apple {
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

console.log(`The  apple tree is alive! :smile:`)
let appleTree = new AppleTree()
do {
appleTree.grow();
// mangoTree.produceMangoes();
appleTree.harvest();
// console.log(mangoTree.harvested);
console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} m | Fruits harvested = ${appleTree.harvested}`)
} while (appleTree.healtyStatus != false)
console.log(`The apple tree has met its end. :sad:`)

//
// // Release 2
// class FruitTree {}
// class Fruit {}
