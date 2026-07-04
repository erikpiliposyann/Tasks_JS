Array.prototype.myLength = function() {
    let count = 0;

    for(let i of this){
        count++;
    }

    return count;
};        

Array.prototype.myPush = function() {
    const len = this.length || 0;
    
    for(let i = 0; i < arguments.length; ++i){
        this[len + i] = arguments[i]; 
    }

    this.length = len + arguments.length

    return this.length;
};

Array.prototype.myPop = function() {
    const len = this.length || 0;

    if(len === 0){
        return undefined
    }

    const temp = this[len - 1];
    delete this[len - 1];
    this.length = len - 1;
    
    return temp;
}

Array.prototype.myShift = function() {
    const len = this.length || 0;

    if(len === 0){
        this.length = 0;
        return undefined;
    }
    const temp = this[0];

    for(let i = 0; i < len - 1; ++i){
        this[i] = this[i+1];
    }

    delete this[len - 1];
    this.length = len - 1;
    
    return temp;
}

Array.prototype.myUnshift = function() {
    const len = this.length || 0;
    const argLen = arguments.length;
    
    for(let i = len - 1; i >= 0; --i){
        this[i + argLen] = this[i]; 
    }

    for(let i = 0; i < argLen; ++i){
        this[i] = arguments[i];
    }

    this.length = len + argLen;

    return this.length;
}

Array.prototype.myMap = function(cb, thisArg) {
    thisArg ??= globalThis;

    let rez = [];
    let size = this.length;

    for(let i = 0; i < size; ++i){
        if(i in this){
            rez.push(cb.call(thisArg, this[i], i, this));
        }
        else{
            ++rez.length;
        }
    }
    return rez;
}

Array.prototype.myFilter = function(cb, thisArg){
    thisArg ??= globalThis;

    let rez = [];
    let size = this.length;

    for(let i = 0; i < size; ++i){
        if(i in this){
            if(cb.call(thisArg,this[i], i, this)){
                rez.push(this[i]);
            }
        }
    }
    return rez;
}

Array.prototype.myReduce = function(cb, initialValue){
    const size = this.length;
    const hasInirial = (arguments.length >= 2);

    if(!hasInirial && size === 0){
        throw new TypeError("Reduce of empty array with no initial value");
    }

    let accumulator = hasInirial ? initialValue : this[0];
    let i = hasInirial ? 0 : 1;

    for( i; i < size; ++i){
        if(i in this){
            accumulator = cb(accumulator, this[i], i, this);
        }
    }
    return accumulator;
}

Array.prototype.myForEach = function(cb, thisArg) {
    thisArg ??= globalThis;
    const size = this.length;

    for(let i = 0; i < size; ++i){
        if(i in this){
            cb.call(thisArg, this[i], i, this);
        }
    }
}

Array.prototype.myFind = function(cb, thisArg){
    thisArg ??= globalThis;
    const size = this.length;

    for(let i = 0; i < size; ++i){
        if(cb.call(thisArg, this[i], i, this)){
            return this[i];  
        }
    }
    return undefined;
}

Array.prototype.myFindIndex = function(cb, thisArg){
    thisArg ??= globalThis;
    const size = this.length;

    for(let i = 0; i < size; ++i){
        if(cb.call(thisArg, this[i], i, this)){
            return i;  
        }
    }
    return -1;
}

Array.prototype.myIncludes = function(searchElement, fromIndex){
    const size = this.length;

    if(size === 0){
        return false;
    }
    let i = fromIndex ?? 0;
    
    if(i < 0){
        i = Math.max(0, size + i);
    }
    if(i >= size){
        return false;
    }
    for( i; i < size; ++i){
        if (searchElement !== searchElement && this[i] !== this[i]){
            return true;
        }
        if(this[i] === searchElement){
            return true;
        }
    }
    return false;
}

Array.prototype.mySome = function(cb, thisArg){
    thisArg ??= globalThis;

    const size = this.length;

    if(size === 0){
        return false;
    }

    for(let i = 0; i < size; ++i){
        if(i in this){
            if(cb.call(thisArg, this[i], i, this)){
                return true;
            }
        }
    }
    return false;
}

Array.prototype.myEvery = function(cb, thisArg){
    thisArg ??= globalThis;

    const size = this.length;

    for(let i = 0; i < size; ++i){
        if(i in this){
            if(!cb.call(thisArg, this[i], i, this)){
                return false;
            }
        }
    }
    return true;
}

Array.prototype.mySlice = function(start, end){
    const size = this.length;

    start ??= 0;
    end ??= size;
    
    if(start < 0){
        start = Math.max(0, size + start);
    }
    if(end < 0){
        end = Math.max(0, size + end);
    }

    if(start >= size){
        return [];
    }

    let rez = [];

    for(let i = start; i < end; ++i){
        if(i in this){
            rez.push(this[i]);
        }
        else{
            ++rez.length;
        }
    }

    return rez;
}

Array.prototype.mySplice = function(start, deleteCount, ...items) {
    const size = this.length;
    start ??= 0;

    if(start < 0){
        start = Math.max(0, size + start);
    }
    start = Math.min(start, size);

    if(deleteCount === undefined){
        deleteCount = size - start;
    } 
    else if(deleteCount < 0){
        deleteCount = 0;
    }
    else {
        deleteCount = Math.min(deleteCount, size - start);
    }

    let end = start + deleteCount;
    let rmArray = this.slice(start, end);

    let diff = items.length - deleteCount;
    
    if(diff < 0){
        for(let i = end; i < size; ++i){
            this[i + diff] = this[i];
        }
    }
    else if(diff > 0){
        for(let i = size - 1; i >= end; --i){
            this[i+diff] = this[i];
        }
    }
    for(let i = 0; i < items.length; ++i){
        this[start + i] = items[i];
    }

    this.length = size + diff;
    return rmArray;
};
