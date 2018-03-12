"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this._age = 0;
    this._height = 0;
    this._fruits = 0;
    this._healtyStatus = true;
    this._harvested = 0;
    this._goodQuality = 0;
    this._badQuality = 0;
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

  get healtyStatus() {
    return this._healtyStatus;
  }

  get harvested() {
    return this._harvested;
  }

  get goodQuality() {
    return this._goodQuality;
  }

  get badQuality() {
    return this._badQuality;
  }


  // Get current states here

  // Grow the tree
  grow() {
    let addHeight = Math.random() * (0.7 - 0.1) + 0.1;

    // age
    this._age += 1;
    // height
    if (this._age <= 12) {
      this._height += addHeight;
    } else {
      this._height;
    }
    
    if (this._age >= 20) {
      this._healtyStatus = false;
    }

  }

  // Produce some mangoes
  produceMangoes() {
    let badOrGood = Math.round(Math.random() * (1 - 0) * 1);
    let totalManggo = Math.round(Math.random() * (2 - 1) * 1);
    let goodOrBad = [];

    for (let i = 0; i < totalManggo; i++) {
      if (badOrGood === 1) {
        let good = new Mango('good');
        goodOrBad.push(good);
      } else {
        let bad = new Mango('bad');
        goodOrBad.push(bad);
      }
    }

    return goodOrBad;
  }

  // Get some fruits
  harvest() {
    let manggos = this.produceMangoes();
    this._badQuality = 0;
    this._harvested = manggos.length;

    for (let i = 0; i < manggos.length; i++) {
      for (let j in manggos[i]) {
        if (manggos[i][j] === 'good') {
          this._goodQuality++;
        } else {
          this._badQuality++;
        }
      }
    }
  }

}

class Mango {
  // Produce a mango
  constructor(quality) {
    this.quality = quality;
  }

}


// driver code untuk release 0

let mangoTree = new MangoTree()
do {
  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.harvest();

  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height.toFixed(1)} | Fruits harvested = ${mangoTree.harvested} {${mangoTree.goodQuality} good, ${mangoTree.badQuality} bad}`)}
  while (mangoTree.healtyStatus != false);

  // Release 1
  class AppleTree {

    // Initialize a new AppleTree
    constructor() {
      this._age = 0;
      this._height = 0;
      this._fruits = 0;
      this._healtyStatus = true;
      this._harvested = 0;
      this._goodQuality = 0;
      this._badQuality = 0;
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
  
    get healtyStatus() {
      return this._healtyStatus;
    }
  
    get harvested() {
      return this._harvested;
    }
  
    get goodQuality() {
      return this._goodQuality;
    }
  
    get badQuality() {
      return this._badQuality;
    }
  
  
    // Get current states here
  
    // Grow the tree
    grow() {
      let addHeight = Math.random() * (0.7 - 0.1) + 0.1;
  
      // age
      this._age += 1;
      // height
      if (this._age <= 8) {
        this._height += addHeight;
      } else {
        this._height;
      }
      
      if (this._age >= 20) {
        this._healtyStatus = false;
      }
  
    }
  
    // Produce some mangoes
    produceApples() {
      let badOrGood = Math.round(Math.random() * (1 - 0) * 1);
      let totalApple = Math.round(Math.random() * (2 - 1) * 1);
      let goodOrBad = [];
  
      for (let i = 0; i < totalApple; i++) {
        if (badOrGood === 1) {
          let good = new Mango('good');
          goodOrBad.push(good);
        } else {
          let bad = new Mango('bad');
          goodOrBad.push(bad);
        }
      }
  
      return goodOrBad;
    }
  
    // Get some fruits
    harvest() {
      let apple = this.produceApples();
      this._badQuality = 0;
      this._harvested = apple.length;
  
      for (let i = 0; i < apple.length; i++) {
        for (let j in apple[i]) {
          if (apple[i][j] === 'good') {
            this._goodQuality++;
          } else {
            this._badQuality++;
          }
        }
      }
    }
  
  }
  
  class Apple {
    // Produce a aplle
    constructor(quality) {
      this.quality = quality;
    }
  
  }
  
  
  // driver code untuk release 1
  console.log('---------------------------------------------------------------------')
  let appleTree = new AppleTree()
  do {
    appleTree.grow();
    appleTree.produceApples();
    appleTree.harvest();
  
    console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height.toFixed(1)} | Fruits harvested = ${appleTree.harvested} {${appleTree.goodQuality} good, ${appleTree.badQuality} bad}`)}
    while (appleTree.healtyStatus != false);

  // Release 2
  class FruitTree {}
  class Fruit {}