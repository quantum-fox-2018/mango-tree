"use strict"

// // release 0
// class MangoTree {
//   constructor() {
//     this._age = 0
//     this._matureAge = 10
//     this._height = 0
//     this._healtyAge = 20
//     this._healtyStatus = true
//     this._fruits = 0
//     this._harvested = []
//   }

//   get age() {
//     return this._age
//   }

//   get height() {
//     return `${this._height.toFixed(1)} m`
//   }

//   get fruits() {
//     return this._fruits
//   }

//   get healtyStatus() {
//     return this._healtyStatus
//   }

//   get harvested() {
//     let good = 0
//     let bad = 0

//     for(let i=0; i<this._harvested.length; i++) {
//       if(this._harvested[i]._quality == 'good') {
//         good++
//       } else {
//         bad++
//       }
//     }
//     return `${this._fruits} (${good} good, ${bad} bad)`
//   }

//   grow() {
//     this._age++
  
//     if(this._age <= this._matureAge) {
//       this._height += Number(Math.random())
//     }

//     if(this._age >= this._healtyAge) {
//       this._healtyStatus = false
//     } else {
//       this._healtyStatus = true
//     }
//   }

//   // Produce some mangoes
//   produceMangoes() {
//     this._fruits = Math.floor(Math.random()*10)
//   }

//   // Get some fruits
//   harvest() {
//     let fruits = this._fruits
//     let bucket = []
//     for(let i=0; i<fruits; i++) {
//       let random = Math.floor(Math.random()*2)
//       if(random == 1) {
//         bucket.push(new Mango('good'))
//       } else {
//         bucket.push(new Mango('bad'))
//       }
//     }
//     return this._harvested = bucket
//   }
// }

// class Mango {
//   // Produce a mango
//   constructor(quality) {
//     this._quality = quality
//   }
// }

// // Release 1
// class AppleTree {
//   constructor() {
//     this._age = 0
//     this._matureAge = 5
//     this._height = 0
//     this._healtyAge = 10
//     this._healtyStatus = true
//     this._fruits = 0
//     this._harvested = []
//   }

//   get age() {
//     return this._age
//   }

//   get height() {
//     return `${this._height.toFixed(1)} m`
//   }

//   get fruits() {
//     return this._fruits
//   }

//   get healtyStatus() {
//     return this._healtyStatus
//   }

//   get harvested() {
//     let good = 0
//     let bad = 0

//     for(let i=0; i<this._harvested.length; i++) {
//       if(this._harvested[i]._quality == 'good') {
//         good++
//       } else {
//         bad++
//       }
//     }
//     return `${this._fruits} (${good} good, ${bad} bad)`
//   }

//   grow() {
//     this._age++
  
//     if(this._age <= this._matureAge) {
//       this._height += Number(Math.random())
//     }

//     if(this._age >= this._healtyAge) {
//       this._healtyStatus = false
//     } else {
//       this._healtyStatus = true
//     }
//   }

//   // Produce some mangoes
//   produceApples() {
//     this._fruits = Math.floor(Math.random()*10)
//   }

//   // Get some fruits
//   harvest() {
//     let fruits = this._fruits
//     let bucket = []
//     for(let i=0; i<fruits; i++) {
//       let random = Math.floor(Math.random()*2)
//       if(random == 1) {
//         bucket.push(new Apple('good'))
//       } else {
//         bucket.push(new Apple('bad'))
//       }
//     }
//     return this._harvested = bucket
//   }
// }

// class Apple {
//   // Produce a mango
//   constructor(quality) {
//     this._quality = quality
//   }
// }

// let mangoTree = new MangoTree()
// do {
//   mangoTree.grow();
//   mangoTree.produceMangoes();
//   mangoTree.harvest();
//   console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
// }
// while (mangoTree._healtyStatus == true)

// let appleTree = new AppleTree()
// do {
//   appleTree.grow();
//   appleTree.produceApples();
//   appleTree.harvest();
//   console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested = ${appleTree.harvested}`)
// }
// while (appleTree._healtyStatus == true)

// Release 2
class FruitTree {
  constructor() {
    this._age = 0
    this._height = 0
    this._healtyStatus = true
    this._fruits = 0
    this._harvested = []
  }

  get age() {
    return this._age
  }
  get height() {
    return `${this._height.toFixed(1)} m`
  }
  get fruits() {
    return this._fruits
  }
  get healtyStatus() {
    return this._healtyStatus
  }
  get harvested() {
    let good = 0
    let bad = 0

    for(let i=0; i<this._harvested.length; i++) {
      if(this._harvested[i]._quality == 'good') {
        good++
      } else {
        bad++
      }
    }
    return `${this._fruits} (${good} good, ${bad} bad)`
  }

  grow() {
    this._age++
  
    if(this._age <= this._matureAge) {
      this._height += Number(Math.random())
    }

    if(this._age >= this._healtyAge) {
      this._healtyStatus = false
    } else {
      this._healtyStatus = true
    }
  }
}

class Fruit {
  constructor(quality) {
    this._quality = quality
  }
}

class MangoTree extends FruitTree {
  constructor() {
    super()
    this._matureAge = 10
    this._healtyAge = 20
  }
  // Produce some mangoes
  produceMangoes() {
    this._fruits = Math.floor(Math.random()*10)
  }

  // Get some fruits
  harvest() {
    let fruits = this._fruits
    let bucket = []
    for(let i=0; i<fruits; i++) {
      let random = Math.floor(Math.random()*2)
      if(random == 1) {
        bucket.push(new Mango('good'))
      } else {
        bucket.push(new Mango('bad'))
      }
    }
    return this._harvested = bucket
  }

}

class AppleTree extends FruitTree {
  constructor() {
    super()
    this._matureAge = 5
    this._healtyAge = 10
  }
  // Produce some mangoes
  produceApples() {
    this._fruits = Math.floor(Math.random()*10)
  }

  // Get some fruits
  harvest() {
    let fruits = this._fruits
    let bucket = []
    for(let i=0; i<fruits; i++) {
      let random = Math.floor(Math.random()*2)
      if(random == 1) {
        bucket.push(new Apple('good'))
      } else {
        bucket.push(new Apple('bad'))
      }
    }
    return this._harvested = bucket
  }

}

class Mango extends Fruit {}
class Apple extends Fruit {}

console.log('===============================================')
console.log('Mango Tree')
console.log('===============================================')

let mangoTree = new MangoTree()
do {
  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
}
while (mangoTree._healtyStatus == true)

console.log('===============================================')
console.log('Apple Tree')
console.log('===============================================')
let appleTree = new AppleTree()
do {
  appleTree.grow();
  appleTree.produceApples();
  appleTree.harvest();
  console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested = ${appleTree.harvested}`)
}
while (appleTree._healtyStatus == true)