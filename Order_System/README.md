# 🛒 Mini E-commerce Order System

A small **E-commerce Order System** built with **JavaScript** and **Object-Oriented Programming (OOP)**.

The main goal of this project is to practice two important **SOLID principles**:

* **S — Single Responsibility Principle**
* **O — Open/Closed Principle**

## Features

* User and product management
* Order creation and product management
* Subtotal and final total calculation
* Multiple discount types
* Multiple payment methods
* Multiple notification methods
* Order repository
* Complete checkout flow

## Architecture

The project separates responsibilities into different classes:

* `User` — user information
* `Product` — product information
* `Order` — manages products and calculates subtotal
* `Discount` — handles discount strategies
* `Payment` — handles payment methods
* `Notification` — sends notifications
* `Checkout` — manages the checkout flow
* `OrderRepository` — saves orders

## Supported Discounts

* `NoDiscount`
* `PercentageDiscount`
* `FixedAmountDiscount`

## Supported Payments

* Credit Card
* PayPal
* Crypto

## Supported Notifications

* Email
* SMS
* Telegram

## Order Repository

Currently, orders are stored in memory using `InMemoryOrderRepository`.

The architecture can later be extended to support databases or file storage without changing the main business logic.

## Checkout Flow

```text
User
 ↓
Create Order
 ↓
Add Products
 ↓
Calculate Subtotal
 ↓
Apply Discount
 ↓
Pay for Order
 ↓
Order Status = PAID
 ↓
Send Notification
 ↓
Save Order
```

## SOLID

### Single Responsibility Principle

Each class has one main responsibility. This keeps the code easier to understand, maintain, and extend.

### Open/Closed Principle

The system is open for extension but closed for modification.

For example, new payment methods, discounts, or notification services can be added without changing the existing `Checkout` logic.

## Example

```js
const checkout = new Checkout(
    new PaymentCard(),
    new PercentageDiscount(10),
    new EmailNotification(),
    new InMemoryOrderRepository()
);

checkout.checkout(order);
```

## 🎯 Project Goal

This project was created as a practical exercise to improve understanding of **JavaScript OOP and SOLID principles**, with a focus on writing clean, maintainable, and extensible code.
