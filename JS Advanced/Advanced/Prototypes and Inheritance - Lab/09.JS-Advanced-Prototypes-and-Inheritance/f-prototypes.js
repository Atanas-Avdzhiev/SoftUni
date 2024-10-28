let smartPerson = {
    writeDissertation() {
        console.log('Dissertation');
    }
};

let buddy = {
    pen: true,
    writeEssay() {
        console.log('ESE');
    },
}

let me = {
    paper: true,
}

Object.setPrototypeOf(me, buddy);
Object.setPrototypeOf(buddy, smartPerson);

console.log(me.paper);

// Me has pen
console.log(me.pen);

// But don't own the pen
console.log(me);

// Get prototype (buddy) Don't use this
console.log(me.__proto__);

// me writes an essay
me.writeEssay();

// How to check if prop/method is mine
console.log(me.hasOwnProperty('pen'));

// Get method from prototype chain
me.writeDissertation();

// Iterate all members including prototype memebrs
for (const key in me) {
    console.log(key);
}

// Legal way to get prototype
console.log(Object.getPrototypeOf(me));

let firstCat = {
    name: 'Navcho',
    // meow() {
    //     console.log(`${this.name} meow...`);
    // }
}

let secondCat = {
    name: 'Sisa',
    // meow() {
    //     console.log(`${this.name} meow...`);
    // }
}

//  create base cat
let cat = {
    meow() {
        console.log(`${this.name} meow...`);
    }
}

Object.setPrototypeOf(firstCat, cat);
Object.setPrototypeOf(secondCat, cat);

firstCat.meow();
secondCat.meow();

// Object assign new object with copy own members
let copyCat = Object.assign({}, firstCat);
// let copyCat = { ...cat };
// copyCat.meow(); throws error because meow is prototype method

// Object create assigns prototype
let copyCat2 = Object.create(firstCat);
console.log(copyCat2);
