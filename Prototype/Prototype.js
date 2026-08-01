function myInstanceOf(obj, Constructor) {
    if (obj === null || (typeof obj !== "object" && typeof obj !== "function") 
        || typeof Constructor !== "function") {
        return false;
    }

    let proto = Object.getPrototypeOf(obj);

    while(proto !== null) {
        if(proto === Constructor.prototype) {
            return true;
        }
        proto = Object.getPrototypeOf(proto);
    }   

    return false;
}

function myNew(Constructor, ...args) {
    const obj = {};

    Object.setPrototypeOf(obj, Constructor.prototype);
    const rezult = Constructor.call(obj, ...args);

    if(rezult === null || (typeof rezult !== "object" && typeof rezult !== "function")) { 
        return obj;
    }
    else {
        return rezult;
    }
}

function checkProperty(obj, key) {
    if(Object.hasOwn(obj, key)) {
        return "own";
    }
    else if(key in obj) {
        return "inherited";
    }
    else {
        return "not found";
    }
}

function getPrototypeMethods(obj) {
    const methods = [];

    const proto = Object.getPrototypeOf(obj);

    if (proto === null) {
        return methods;
    }

    const temp = Object.getOwnPropertyNames(proto);

    for (const key of temp) {
        if (typeof proto[key] === "function" && key !== "constructor") {
            methods.push(key);
        }
    }

    return methods;
}

Array.prototype.mySum = function() {
    let size = this.length;
    let rezult = 0;

    for(let i = 0; i < size; ++i){
        if(typeof this[i] === "number") {
            rezult += this[i];
        }
        else {
            throw new Error("Array element is not valid.");
        }
    }

    return rezult;
}
