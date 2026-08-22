// 1. Range Object 

const range1 = {
    from: 1,
    to: 5,

    [Symbol.iterator]() {
        let current = this.from;
        return {
            next: () => {
                if(current > this.to) {
                    return {
                        value: undefined,
                        done: true
                    }
                }
                return {
                    value: current++,
                    done: false
                }
            }
        };
    }
};

// 2. Range with Step

const range2 = {
    from: 0,
    to: 10,
    step: 2,

    [Symbol.iterator]() {
        let current = this.from;

        return {
            next: () => {
                if (current > this.to) {
                    return {
                        value: undefined,
                        done: true
                    };
                }

                const value = current;
                current += this.step;

                return {
                    value: value,
                    done: false
                };
            }
        };
    }
};

// 3. User

const User = {

    [Symbol.hasInstance](value) {
        return value.name && value.email;
    }
};

// 4. Product

const product = {
    name: 'Laptop',
    price: 1500,

    [Symbol.toPrimitive](hint) {

        if (hint === "string") {
            return `${this.name}: $${this.price}`;
        }

        if (hint === "number") {
            return this.price;
        }

        if (hint === "default") {
            return `${this.name}: $${this.price}`;
        }
    }
};
