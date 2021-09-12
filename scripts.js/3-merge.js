const wu = {
    a: [{ x: 2 }, { y: 4 }],
    b: 1
};
const tang = {
    a: { z: 3 },
    b: [2, 3],
    c: 'foo'
};
const clan = {
    a: { t: 5 },
    c: 'foo',
};
const expectedResult1 = {
    "a": [{ x: 2 }, { y: 4}, { z: 3 }],
    "b": [1, 2, 3],
    "c": "foo"
}
const expectedResult2 = {
    "a": [{ "z": 3 }, { "t": 5 }],
    "b": [2, 3],
    "c": ["foo", "foo"],
}
function getArray(key, obj){
    let val = obj[key];
    let arr = [];
    if(val === undefined){
        return arr;
    } 
    if(typeof val === "number"){
        arr.push(val)
        return arr
    }
    if(typeof val === "string"){
        arr.push(val)
        return arr
    }
    if(typeof val === 'object' && val !== null && !Array.isArray(val)){
        arr.push(val)
        return arr
    }
    if(Array.isArray(val)){
        return val
    }
    console.log("We should never get here")
}

function merge(one, two) {
    // make an array of all keys in both objects, combining both lists of keys into one array [a, b, a, b, c]
    const array3 = Object.keys(one).concat(Object.keys(two));
    // remove duplicates from array [a, b, c]
    const unique = [...new Set(array3)]  
    // create a new empty object {}
    const wuTangObject  = {}
    // loop on array of all keys
    for(i = 0; i < unique.length; i++){
        let key = unique[i];
        //   add all values from wu { a: [{ x: 2 }, { y: 4 }]}
        let firstArray = getArray(key, one)
        //   add all values from tang { a: [{ x: 2 }, { y: 4 }, { z: 3 }]}, 
        let secondArray = getArray(key, two)

        let newArray = firstArray.concat(secondArray)

        if (newArray.length === 1){
            newArray = newArray[0]
        };

        wuTangObject[key] = newArray;
        
    }
    return wuTangObject;
}

console.log(JSON.stringify(merge(wu, tang)) === JSON.stringify(expectedResult1)); 
console.log(JSON.stringify(merge(tang, clan)) ===  JSON.stringify(expectedResult2)); 