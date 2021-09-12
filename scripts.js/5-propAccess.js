function propAccess(object, path) {
    if(path === ""){
        return object;
    }

    // split path by .
    const keys = path.split('.');

    // animal
    var firstKey = keys[0]
    var secondKey = keys[1]
    var thirdKey = keys[2]
    
    var objectKeys = Object.keys(object)
    
    if(!objectKeys.includes(firstKey)){
        return `${firstKey} does not exist`
    }
    
    var nestedObject = object[firstKey]
    var nestedAttributes = Object.keys(nestedObject)
    if(!nestedAttributes.includes(secondKey)){
        return `${firstKey}.${secondKey} does not exist`
    }

    var nestedNestedObject = object[firstKey][secondKey]
    var nestedNestedAttributes = Object.keys(nestedNestedObject)
    if(!nestedNestedAttributes.includes(thirdKey)){
        return `${firstKey}.${secondKey}.${thirdKey} does not exist`
    } else {
        return nestedNestedObject[thirdKey]
    }

}

const farm = {
    animal: {
        type: { name: 'cow' },
        color: "verte",
        bonus: {
            sparkly: true,
            3: "No at least 7"
        }
    }
}

console.log(propAccess(farm, "animal.type.name")) // "cow" 
console.log(propAccess(farm, "animal.affiliation.name")) // "animal.affiliation does not exist" 
console.log(propAccess(farm, "animal.bonus.3")) // "No at least 7" 