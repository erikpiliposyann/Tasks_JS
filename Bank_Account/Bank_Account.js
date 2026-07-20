const account1 = {
    owner: "Erik",
    balance: 1000,
    history: [],

    deposit(amount) {
        if (typeof amount !== "number" || amount <= 0) {
            throw new Error("Amount is invalid");
        }
        else {
            this.balance += amount;
            this.history.push({"Deposit": amount});
            console.log("Success");
        }
    },

    withdraw(amount) {
        if (typeof amount !== "number" || amount <= 0) {
            throw new Error("Amount is invalid");
        }
        else if(amount > this.balance) {
            throw new Error ("Your balance not enough");
        }
        else {
            this.balance -= amount;
            this.history.push({"Withdraw": amount});
            console.log("Success");
        }
    },

    transfer(account, amount) {
        if (!account || typeof account !== "object") {
            throw new Error("Invalid account");
        }
        if(this.owner === account.owner){
            throw new Error ("You can't do transfer your account");
        }
        if (typeof amount !== "number" || amount <= 0) {
            throw new Error("Amount is invalid");
        }
        else if(amount > this.balance) {
            throw new Error ("Your balance not enough");
        }
        else {
            this.balance -= amount;
            account.balance += amount;
            this.history.push({TransferTo: account.owner, Withdraw: amount});
            account.history.push({TransferFrom: this.owner, Deposit: amount});
            console.log("Success");
        }
    },

    showBalance() {
        console.log("Your balance is " + this.balance);     
    },

    showHistory() {
        console.log("Your hestory is ");
        console.table(this.history);
    },
};

const account2 = {
    owner: "Anna",
    balance: 2000,
    history: [],

    
    deposit(amount) {
        if (typeof amount !== "number" || amount <= 0) {
            throw new Error("Amount is invalid");
        }
        else {
            this.balance += amount;
            this.history.push({"Deposit": amount});
            console.log("Success");
        }
    },

    withdraw(amount) {
        if (typeof amount !== "number" || amount <= 0) {
            throw new Error("Amount is invalid");
        }
        else if(amount > this.balance) {
            throw new Error ("Your balance not enough");
        }
        else {
            this.balance -= amount;
            this.history.push({"Withdraw": amount});
            console.log("Success");
        }
    },

    transfer(account, amount) {
        if (!account || typeof account !== "object") {
            throw new Error("Invalid account");
        }
        if(this.owner === account.owner){
            throw new Error ("You can't do transfer your account");
        }
        if (typeof amount !== "number" || amount <= 0) {
            throw new Error("Amount is invalid");
        }
        else if(amount > this.balance) {
            throw new Error ("Your balance not enough");
        }
        else {
            this.balance -= amount;
            account.balance += amount;
            this.history.push({TransferTo: account.owner, Withdraw: amount});
            account.history.push({TransferFrom: this.owner, Deposit: amount});
            console.log("Success");
        }
    },

    showBalance() {
        console.log("Your balance is " + this.balance);     
    },

    showHistory() {
        console.log("Your hestory is ");
        console.table(this.history);
    },

};

