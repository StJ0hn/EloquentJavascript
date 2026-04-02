function reverseArray(array) {
    let reversedArray = []
    for (let i = array.length - 1; i >= 0; i--) {
        let element = array[i];
        reversedArray.push(element);
    }
    return reversedArray
}

function reverseArrayInPlace(array){
    let left = 0;
    let right = array.length - 1;
    while (left < right) {
        let temp = array[left];
        array[left] = array[right];
        array[right] = temp;
        left ++;
        right --;
    }

    return array;
}

console.log(reverseArray([1, 3, 4, 5, 6, 9]));
console.log(reverseArrayInPlace([1, 2, 3, 4, 5]));