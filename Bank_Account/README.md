# 💳 Bank Account System

## 📌 Overview

This project is a simple **Bank Account System** built with JavaScript objects and object methods.

The application supports basic banking operations such as:

- 💰 Deposit money
- 💸 Withdraw money
- 🔄 Transfer money between accounts
- 📊 View account balance
- 📜 View transaction history

It demonstrates the use of:

- JavaScript Objects
- Object Methods
- `this` keyword
- Arrays
- Error Handling (`throw new Error`)
- Input Validation

---

## ✨ Features

### 💰 Deposit

Adds money to an account.

**Validation**
- Amount must be a number.
- Amount must be greater than zero.

```javascript
account1.deposit(500);
```

---

### 💸 Withdraw

Withdraws money from an account.

**Validation**
- Amount must be a number.
- Amount must be greater than zero.
- Account must have sufficient balance.

```javascript
account1.withdraw(200);
```

---

### 🔄 Transfer

Transfers money from one account to another.

**Validation**
- Destination account must be valid.
- Cannot transfer to the same account.
- Amount must be greater than zero.
- Sender must have enough balance.

```javascript
account1.transfer(account2, 300);
```

---

### 📊 Show Balance

Displays the current account balance.

```javascript
account1.showBalance();
```

Example output:

```
Your balance is 1000
```

---

### 📜 Show History

Displays all transactions using `console.table()`.

```javascript
account1.showHistory();
```

---

## 📝 Transaction History

Each successful operation is saved inside the `history` array.

### Deposit

```javascript
{
    Deposit: 500
}
```

### Withdraw

```javascript
{
    Withdraw: 200
}
```

### Transfer

```javascript
{
    TransferTo: "Anna",
    Withdraw: 300
}
```

### Received Transfer

```javascript
{
    TransferFrom: "Erik",
    Deposit: 300
}
```

---

## 📂 Project Structure

```
project/
│
├── index.js
└── README.md
```

---

## 🛠️ Technologies Used

- JavaScript (ES6)
- Objects
- Arrays
- Error Handling
- Console API

---

## 🚀 Future Improvements

- Use a Factory Function
- Implement ES6 Classes
- Add transaction timestamps
- Save data in JSON or a database
- Generate unique account IDs
