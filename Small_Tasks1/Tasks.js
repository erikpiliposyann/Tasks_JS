function isFalsy(value) {
    if(!value){
        return true;
    }
    else{
        return false;
    }
} 

function sum(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    } else {
        return "Invalid input";
    }
}

function getLenght(str){
    return str.length;
}

function toUpper(str) {
    var result = "";
    for (var i = 0; i < str.length; i++) {
        var code = str.charCodeAt(i);
        if (code >= 97 && code <= 122) {
            result += String.fromCharCode(code - 32);
        } else {
            result += str[i];
        }
    }
    return result;
}

function sum(a, b) {
    return a + b;
}

function reverseStr(str){
    var rev = "";
    for(var i = str.length - 1; i >= 0; --i){
        rev += str[i];
    }
    return rev;
}

const str = "Learning JavaScript";
console.log(str.includes("Java"));

let numList = [3, 6, 9, 12];
console.log(numList.indexOf(9));

let expenses = [50, 75, 100];
let sum = expenses.reduce((acc,num) => acc + num, 0);
console.log(sum);

function evenOrOdd(n){
    if(!(n % 2)){
        return "Even";
    }
    else{
        return "Odd";
    }
}

function getType(value){
    if(value === null){
        return "null";
    }
    if(Array.isArray(value)){
        return "Array"
    }
    return typeof value;
}

function compare(a, b) {
    return { loose: a == b, strict: a === b };
}

function isSafeInt(num){
    if(typeof num === "number" && !isNaN(num) 
    && isFinite(num) && Number.isSafeInteger(num)){
        return true;
    }
    else{
        return false;
    }
}

function toNumberOrNull(value){
    let n = Number(value);
    if(isNaN(n)){
        return "null";
    }
    return n;
}

function toBoolean(value){
    return Boolean(value);
}

function isPlainObject(value){
    if(Array.isArray(value)) return false;
    if(value === null) return false;
    if(typeof value === "function") return false;
    return typeof value === "object";
}

function isPrimitive(val) {
    return val !== Object(val);
}
 
function safeSum(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      return "Invalid input";
    }
    return a + b;
}

