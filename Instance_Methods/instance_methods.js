Function.prototype.myCall = function(thisArg, ...args){
    thisArg ??= globalThis;

    if (typeof thisArg !== "object" && typeof thisArg !== "function") {
        thisArg = Object(thisArg);
    }

    const fnSymbol = Symbol("temporaryMethod");

    thisArg[fnSymbol] = this;

    const rez = thisArg[fnSymbol](...args);

    delete thisArg[fnSymbol];
     
    return rez;
};

Function.prototype.myApply = function(thisArg, args){
    thisArg ??= globalThis;

    if (typeof thisArg !== "object" && typeof thisArg !== "function") {
        thisArg = Object(thisArg);
    }

    args ??= [];

    const fnSymbol = Symbol("fn");

    thisArg[fnSymbol] = this;

    const rez = thisArg[fnSymbol](...args);

    delete thisArg[fnSymbol]

    return rez;
}

Function.prototype.myBind = function (thisArg, ...args) {
    const oringinfn = this;
  
    function boundFn(...newArgs) {
      if (this instanceof boundFn) {
        return oringinfn.myApply(this, [...args, ...newArgs]);
      }
      return oringinfn.myCall(thisArg, ...args, ...newArgs); 
    }
  
    return boundFn; 
}
