//let allMethods = Object.getOwnPropertyNames(Array.prototype);
//console.log(allMethods.sort());

var allMethodsHash = {};

let jsArr = [1,[2,3],3,4];

function check(name, callFunc, arg1, arg2) {
    console.log(name, callFunc, arg1, arg2);
    allMethodsHash[name] || (allMethodsHash[name] = new Array())
    allMethodsHash[name].push(callFunc); 
    jsArr[callFunc](arg1);
}

check("at", "at", 1);
check("flat", "flat");
check("flat", "map", function() { 1 });
check("flat", "flatMap", function(item) { return item + 1; });


/*

// flatMap, flat, map
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

allMethodsHash["flat"] = [ "flat", "map", "flatMap" ];

// forEach, find 3, filter
jsArr.forEach(function(item){
    console.log(item);
});

let find = jsArr.find(function(item) {
    return(item == 3);
});
console.log("find: " + find);

// findIndex, indexOf, lastIndexOf
let findIndex = jsArr.findIndex(function(item) {
    return(item == 3);
}); 

indexOf = jsArr.indexOf(findIndex);

allMethodsHash["findIndex"] = [ "findIndex", "indexOf" ];


*/

// print all
Object.keys(allMethodsHash).forEach(function (key) { 
    console.log("allMethods");
    console.log(key, allMethodsHash[key]);
});