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
            if (fruit_type === 'mango') {
                let mango = new Mango();
                this._fruits.push(mango);
            }

            if (fruit_type === 'apple') {
                let apple = new Apple();
                this._fruits.push(apple);
            }
        }

    }

    // Get some fruits
    harvest() {
        this._harvested = this._fruits.length;

        for (let i = 0; i < this.fruits.length; i++) {
            if(this.fruits[i]._quality == "good") {
                this._goodQuality++;
            } else if(this.fruits[i]._quality == "bad") {
                this._badQuality++;

            }
        }
        this._fruits = [];
    }

    resetBadOrGood() {
        this._badQuality = 0;
        this._goodQuality = 0;
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
    constructor() {
        this._quality = this.badOrGood();
    }

    get quality() {
        return this._quality;
    }

    badOrGood() {
        let badOrGood = Math.round(Math.random() * (1 - 0) + 1);

        if (badOrGood === 1) {
            return 'good';
        } else {
            return 'bad';
        }
    }
}

class Mango extends Fruit {
    // Produce a mango
    constructor() {
        super();
    }
}

class Apple extends Fruit {
    // Produce a apple
    constructor() {
        super();
    }
}

console.log('The tree is a life! :smile:');
let mangoTree = new MangoTree()
do {
    mangoTree.grow();
    mangoTree.produceFruit('mango');
    mangoTree.harvest();

    console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height.toFixed(1)} | Fruits harvested = ${mangoTree.harvested} {${mangoTree.goodQuality} good, ${mangoTree.badQuality} bad}`);
    mangoTree.resetBadOrGood();
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
    console.log(`[Year ${aplleTree.age} Report] Height = ${aplleTree.height.toFixed(1)} | Fruits harvested = ${aplleTree.harvested} {${aplleTree.goodQuality} good, ${aplleTree.badQuality} bad}`);
    aplleTree.resetBadOrGood();
}
while (aplleTree.healtyStatus != false);
console.log('The tree has met its end.:sad:');