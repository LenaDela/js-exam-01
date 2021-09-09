// function objectEquals(x, y) {
//     'use strict';
//     if (x === null || x === undefined || y === null || y === undefined) { return x === y; }
//     if (x.constructor !== y.constructor) { return false; }
//     if (x instanceof Function) { return x === y; }
//     if (x instanceof RegExp) { return x === y; }
//     if (x === y || x.valueOf() === y.valueOf()) { return true; }
//     if (Array.isArray(x) && x.length !== y.length) { return false; }
//     if (x instanceof Date) { return false; }
//     if (!(x instanceof Object)) { return false; }
//     if (!(y instanceof Object)) { return false; }
//     const p = Object.keys(x);
//     return Object.keys(y).every(function (i) { return p.indexOf(i) !== -1; }) &&
//         p.every(function (i) { return objectEquals(x[i], y[i]); });
// }

const wu = {
    a: [{ x: 2 }, { y: 4 }],
    b: 1
};
const tang = {
    a: { z: 3 },
    b: [2, 3],
    c: 'foo'
};
// const clan = {
//     a: { t: 5 },
//     c: 'foo',
// };
const expectedResult1 = {
    "a": [{ x: 2 }, { y: 4 }, { z: 3 }],
    "b": [1, 2, 3],
    "c": ["foo"]
}
// const expectedResult2 = {
//     "a": [{ "z": 3 }, { "t": 5 }],
//     "b": [2, 3],
//     "c": ["foo", "foo"],
// }

function merge(one, two) {
    // make an array of all keys in both objects, combining both lists of keys into one array [a, b, a, b, c]
    const array3 = Object.keys(one).concat(Object.keys(two));
    console.log(array3)
    // remove duplicates from array [a, b, c]
    const unique = [...new Set(array3)]  
    console.log(unique)  
    // create a new empty object {}
    const wuTangObject  = {}
    // loop on array of all keys
    for(i = 0; i < unique.length; i++){
        console.log(unique[i])
        //   add new key to object { a: ...}
        console.log()
        // wuTangObject.a = 
        
        //   add all values from wu { a: [{ x: 2 }, { y: 4 }]}
        //   add all values from tang { a: [{ x: 2 }, { y: 4 }, { z: 3 }]}, 
        //   next loop { b: [1, 2, 3]}
    }
    // return new object
}

// console.log(objectEquals(merge(wu, tang), expectedResult1));
// //console.log(objectEquals(merge(tang, clan), expectedResult2));
//merge two arrays


console.log(JSON.stringify(merge(wu, tang)) === JSON.stringify(expectedResult1)); 
// console.log(JSON.stringify(merge(tang, clan)) ===  JSON.stringify(expectedResult2)); 
// console.log(JSON.stringify(merge(wu, tang)));