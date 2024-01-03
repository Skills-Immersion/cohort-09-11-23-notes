function indexOf(array, isMatch) {
    for (let i = 0; i < array.length; i++) {
        if ( isMatch(array[i], i, array) ) {
            return i;
        }
    }
    return -1
}

let x = [
    {name: "Lorraine"},
    {name: "Steve"},
    {name: "Bradford"}
]

console.log(indexOf(x, (element, index, arr) => element.name === "Bradford" ));

