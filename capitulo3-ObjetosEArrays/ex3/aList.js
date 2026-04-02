function arrayListToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
        list = {
            value: array[i],
            rest: list
        }
    }
    return list;
}

function listToArray(list) {
    let array = [];
    while (list !== null) {
        array.push(list.value);
        list = list.rest;
    }
    return array;
}

let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};