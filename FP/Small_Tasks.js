function curry(cb) {
    return function curried(...args) {
        if(args.length >= cb.length) {
            return cb.apply(this, args);
        }
        else {
            return function (...newArgs){
                return curried.apply(this, [...args, ...newArgs]);
            }
        }
    }
}

function memoize(cb) {
    let cache = {};
    return function (n){
        if(n in cache) return cache[n];

        let temp = cb(n);
        cache[n] = temp;
        return temp;
    }
}


function pipe(...funcs) {
    return function (value) {
        let result = value;

        for (let i = 0; i < funcs.length; ++i) {
           result = funcs[i](result);
        }

        return result;
    };
}


function trace(cb) {
    return function wrapper(...args) {
        wrapper.history ??= [];
        const result = cb(...args);
        wrapper.history.push({
            args,
            output: result
        });
        return result;
    }
}
