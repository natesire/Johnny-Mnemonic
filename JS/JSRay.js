// I reflect upon thyself to check all my functions

let allRealArrayMethods = Object.getOwnPropertyNames(Array.prototype);
console.log(allRealArrayMethods.sort());

// define vars up front
var jsArrayMethods = new Set();
let jsArr = [1,[2,3],3,4];

// this superflous code is here as a memory mnemonic
// cannot use some functions as the key name hence the 2 or error message
// triplesMethods[memoryGroup].push is not a function

Ray("at", ["at"], 9725);
Ray("flat", ["flat", "map", "flatMap"],                             function(treasure)      { treasure });
Ray("forEach2", ["forEach", "find", "filter"],                      function(lightSaber)    { lightSaber });
Ray("indexOf", ["indexOf", "lastIndexOf", "findIndex"],             function(finger)        { finger});
Ray("pop", ["pop", "slice", "splice"],                              function(watermelon)    { watermelon });
Ray("push", ["push", "unshift", "concat"],                          function(kitty)         { kitty });
Ray("shift", ["shift", "reduce", "reduceRight"],                    function(speed)         { speed });
Ray("some", ["some", "includes", "every"],                          function(inclusive)     { inclusive });
Ray("sort", ["sort", "fill", "every"],                              function(worry)         { worry });
Ray("joinToLocaleString", ["toLocaleString", "join", "toString"],   function(party)         { party });
Ray("values2", ["values", "entries", "keys"],                       function(bedVals)       { bedVals });

let selfCheck = allRealArrayMethods.every(function (key) { 
    jsArrayMethods.has(key) === true;
});

console.log("did I try calling all possible functions: " + selfCheck);

// JS allows you to define a function at the end (hoisting)
function Ray(memoryGroup, func, arg1) {
    func.forEach((fun) => {
        try {
            jsArrayMethods[memoryGroup] || (jsArrayMethods[memoryGroup] = new Array());
            jsArrayMethods[memoryGroup].push(func);
            allRealArrayMethods[fun](arg1);
            } catch (error) {
            verboseError(memoryGroup, func, arg1, error);
        }
    });
}

function verboseError(memoryGroup, func, arg1, error) {
    console.log("memoryGroup:" + memoryGroup, "func: " + func, "arg1: " + arg1, "e.message: " + error.message);
}