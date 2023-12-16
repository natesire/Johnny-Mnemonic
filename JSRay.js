let allMethods = Object.getOwnPropertyNames(Array.prototype);
console.log(allMethods.sort());

let jsArr = [1,[2,3],3,4];

let flat = jsArr.flat();
console.log(flat);

let flattened = jsArr.flatMap(function(item){
    return item + 1;
})
console.log(flattened);

let map = flat.map(function(item){
    return item + 2;
})
console.log(map);
