var lena = { 
    "a": [{x: 9}, {y: 10}], 
    "b": [{f: 1}, {g: 6}]
};

var tom = { 
    a: [{z: 11}] 
};

for (var property in lena) {

    // console.log(`The key => ${property}, the value => ${lena[property]}`)
    // console.log(`The value in tom of ${property} is ${tom[property]}`)
    let newArray = [];

    if(lena[property] != undefined){
        newArray.push(lena[property]);
    }

    if(tom[property] != undefined){
        newArray.push(tom[property]);
    }
    
    console.log(newArray);
    // console.log(`Merged values: ${property}: ${newArray}`)
    console.log("..............................")
}


// 'The key => a, the value => 1
// 'The key => b, the value => 2

