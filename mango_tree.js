"use strict"

class FruitTree {
    constructor(age, height, fruits, healtyStatus, harvested, mature, maxAge, maxHeight, goodQuality, badQuality) {
        this._age = age;
        this._height = height;
        this._fruits = fruits;
        this._healtyStatus = healtyStatus;
        this._harvested = harvested;
        this._mature = mature;
        this._maxAge = maxAge;
        this._maxHeight = maxHeight;
        this._goodQuality = goodQuality;
        this._badQuality = badQuality;
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

    get mature() {
        return this._mature;
    }

    get maxAge() {
        return this._maxAge;
    }

    get goodQuality() {
        return this._goodQuality;
    }

    get badQuality() {
        return this._badQuality;
    }

    // Grow the tree
    grow() {
        let addHeight = Math.random() * (0.7 - 0.1) + 0.1;

        // age
        this._age += 1;
        this._badQuality = 0;
        this._goodQuality = 0;

        // height
        if (this._age <= this._mature) {
            this._height += addHeight;
        } else {
            this._height = this._maxHeight;
        }

        // max age
        if (this._age >= this._maxAge) {
            this._healtyStatus = false;
        }
    }

    // Produce some fruit
    produceFruit(fruit_type) {
        let totalFruit = Math.round(Math.random() * (20 - 1) + 1);

        for (let i = 0; i < totalFruit; i++) {
            let badOrGood = Math.round(Math.random() * (1 - 0) + 1);
            if (badOrGood === 1) {
                if (fruit_type === 'mango') {
                    let good = new Mango('good');
                    this._fruits.push(good);
                }
                if (fruit_type === 'apple') {
                    let good = new Apple('good');
                    this._fruits.push(good);
                }
            } else {
                if (fruit_type === 'mango') {
                    let bad = new Mango('bad');
                    this._fruits.push(bad);
                }
                if (fruit_type === 'apple') {
                    let bad = new Apple('bad');
                    this._fruits.push(bad);
                }
            }
        }
    }

    // Get some fruits
    harvest() {
        this._harvested = this._fruits.length;

        for (let i = 0; i < this.fruits.length; i++) {
            for (let j in this.fruits[i]) {
                if (this._fruits[i][j] === 'good') {
                    this._goodQuality++;
                } else {
                    this._badQuality++;
                }
            }
        }
        this._fruits = [];
    }

}

class MangoTree extends FruitTree {
    // Initialize a new MangoTree
    constructor() {
        super(0, 0, [], true, 0, 10, 20, 5.1, 0, 0);
    }
}

class AppleTree extends FruitTree {
    // Initialize a new AppleTree
    constructor() {
        super(0, 0, [], true, 0, 8, 20, 4.4, 0, 0);
    }
}

class Fruit {
    constructor(quality) {
        this._quality = quality;
    }

    get quality() {
        return this._quality;
    }
}

class Mango extends Fruit {
    // Produce a mango
    constructor(quality) {
        super(quality);
    }
}

class Apple extends Fruit {
    // Produce a apple
    constructor(quality) {
        super(quality);
    }
}

console.log('The tree is a life! :smile:');
let mangoTree = new MangoTree()
do {
    mangoTree.grow();
    mangoTree.produceFruit('mango');
    mangoTree.harvest();

    console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height.toFixed(1)} | Fruits harvested = ${mangoTree.harvested} {${mangoTree.goodQuality} good, ${mangoTree.badQuality} bad}`)
}
while (mangoTree.healtyStatus != false);
console.log('The tree has met its end.:sad:');
console.log('');
console.log('The tree is a life! :smile:');
let aplleTree = new AppleTree()
do {
    aplleTree.grow();
    aplleTree.produceFruit('apple');
    aplleTree.harvest();
    console.log(`[Year ${aplleTree.age} Report] Height = ${aplleTree.height.toFixed(1)} | Fruits harvested = ${aplleTree.harvested} {${aplleTree.goodQuality} good, ${aplleTree.badQuality} bad}`)
}
while (aplleTree.healtyStatus != false);
console.log('The tree has met its end.:sad:');