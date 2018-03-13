"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this._umur = 0
    this._tinggi = 0
    this.kapasitasMaksimalBuah = 0
    this.kumpulanBuahYangAda = 0
    this._jumlahBuahYangSudahdipetik = null
    this._statusSehat = true
  }

  get age() {
    return this._umur
  }

  get height() {
    return this._tinggi.toFixed(2)

  }

  get fruits() {

  }

  get healtyStatus() {
    return this._statusSehat
  }

  get harvest() {
    return this._jumlahBuahYangSudahdipetik
  }

  // Get current states here

  // Grow the tree
  grow() {
    this._umur = this._umur +1
    this._tinggi = this._tinggi + Math.random()

    if(this._umur >10){
      this._statusSehat = false
    }
  }

  // Produce some mangoes
  produceMangoes() {
    this._jumlahBuahYangSudahdipetik = 0
    this._jumlahBuahYangSudahdipetik = Math.floor(Math.random()*10)
  }

  // Get some fruits
  harvested() {
    return this._jumlahBuahYangSudahdipetik
  //   while(this._jumlahBuahYangSudahdipetik>0){
  //
  //     if(Math.random()>0.5){
  //
  //     }
  //     this._jumlahBuahYangSudahdipetik--;
  //   }
  //
  }

}

class Mango {
  // Produce a mango
  constructor(quality) {
    this.quality = quality
  }
}


   // driver code untuk release 0x`
   console.log(`The tree is alive! :smile:`)

   let mangoTree = new MangoTree()


   do {
     mangoTree.grow();
     mangoTree.produceMangoes();
     mangoTree.harvested()
     console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} m | Fruits harvested = ${mangoTree.harvest}`)
   } while (mangoTree.healtyStatus != false)

   console.log(`The tree has met its end. : sad:`)




// Release 1
class AppleTree {}
class Apple {}

// Release 2
class FruitTree {}
class Fruit {}
