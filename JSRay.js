let allMethods = Object.getOwnPropertyNames(Array.prototype);
console.log(allMethods.sort());

var triplesMethods = {};

let jsArr = [1,[2,3],3,4];

function ray(memoryGroup, callFunc, arg1, arg2) {
    try {
      triplesMethods[memoryGroup] || (triplesMethods[memoryGroup] = new Array());
      triplesMethods[memoryGroup].push(callFunc);
      jsArr[callFunc](arg1);
    } catch (e) {
      console.log(memoryGroup, callFunc, arg1, e.message);
    }
}

ray("at", "at", 9725);
ray("flat", "flat");
ray("flat", "map", function() { 1 });
ray("flat", "flatMap", function(item) { return item + 1; });
ray("forEach", "forEach", function(item) { return item + 1; });
ray("forEach", "find", function(item) { item === 3 });
ray("forEach", "filter", function(item) { item === 3 });
ray("pop", "pop", function(item) { item === 3 });
ray("pop", "splice", function(item) { item === 3 });
ray("pop", "slice", function(item) { item === 3 });
ray("push", "push", function(item) { item === 3 });
ray("push", "unshift", function(item) { item === 3 });
ray("push", "concat", function(cat) { cat === 3 });
ray("shift", "shift", function(item) { item === 3 });
ray("shift", "reduce", function(cats) { cats === 3 });
ray("shift", "reduceRight", function(item) { item === 3 });
ray("some", "some", function(get) { get === 3 });
ray("some", "includes", function(nude) { nude === 3 });
ray("some", "every", function(every) { every === 3 });
ray("sort", "fill", function(every) { every === 3 }); //most difficult to remember goes first
ray("sort", "reverse", function(every) { every === 3 });
ray("sort", "sort", function(every) { every === 3 }); // easiest to remember goes last

// cannot use toString as the key name
// triplesMethods[memoryGroup].push is not a function
ray("toString2", "toLocaleString", function(every) { every === 3 }); // easiest to remember goes last
ray("toString2", "join", function(every) { every === 3 }); // easiest to remember goes last
ray("toString2", "toString"); // easiest to remember goes last

ray("values", "values", function(every) { every === 3 }); // easiest to remember goes last
ray("values", "entries", function(every) { every === 3 }); // easiest to remember goes last
ray("values", "keys", function(every) { every === 3 }); // easiest to remember goes last

Object.keys(triplesMethods).forEach(function (key) { 
    console.log(key, triplesMethods[key]);
});