function deepEqual(valueOne, valueTwo) {
    if (valueOne === valueTwo){
        return true;
    }
    else if (valueOne === null || valueTwo === null || typeof(valueOne) !== "object" || typeof(valueTwo) !== "object") {
        return false;
    }

    let keyOne = Object.keys(valueOne);
    let keyTwo = Object.keys(valueTwo);
    if (keyOne.length !== keyTwo.length) {
        return false;        
    }

    for (let key of keyOne) {
        if (!deepEqual(valueOne[key], valueTwo[key])) 
            return false;
    }
    return true;
}

let valueOne = {
    x: "John",
    y: "Marston"
}

let valueTwo = {
    x: "John",
    y: "Marston"
}

console.log(deepEqual(valueOne, valueTwo))