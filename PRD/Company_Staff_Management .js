class Employee {
    #name;
    #baseSalary;

    constructor(name, baseSalary) {
        this.#name = name;
        this.#baseSalary = baseSalary;
    }

    getName() {
        return this.#name;
    }
    getBaseSalary() {
        return this.#baseSalary;
    }
    calculatePay(){
        return this.#baseSalary;
    }
    getProfileInfo() {
        return `Name: ${this.#name}, Base Salary: ${this.#baseSalary}`;
    }
}

class Developer extends Employee {
    #mainLanguage;
    #bugsFixed;

    constructor(name, salary, mainLanguage) {
        super(name, salary);

        this.#mainLanguage = mainLanguage;
        this.#bugsFixed = 0;
    }

    writeCode() {
        return `${this.getName()} is writing code in ${this.#mainLanguage}.`;
    }

    fixBug() {
        this.#bugsFixed++;
        return `Bug fixed. Total bugs fixed: ${this.#bugsFixed}`;
    }
}

class Manager extends Employee {
    #teamSize;
    #successfulDeals;

    constructor(name, salary, teamSize) {
        super(name, salary);
        
        this.#teamSize = teamSize;
        this.#successfulDeals = 0;
    }

    conductMeeting() {
        return `Meeting started with: ${this.#teamSize} team members`;
    }

    closeDeal() {
        this.#successfulDeals++;
        return `Deal closed successfully. Total successful deals: ${this.#successfulDeals}`;
    }
}


