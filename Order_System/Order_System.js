class User {
    constructor(id , name) {
        this.id = id;
        this.name = name;
    }
}

class Product {
    constructor(id , name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class Order {
    constructor(user) {
        this.products = [];
        this.user = user;
        this.status = "PENDING";
    }

    addProducts(product) {
        this.products.push(product);
        return;
    }
    removeProducts(product) {
        const index = this.products.indexOf(product);
    
        if (index === -1) {
            return;
        }
        const lastIndex = this.products.length - 1;
        [this.products[index], this.products[lastIndex]] =
            [this.products[lastIndex], this.products[index]];
    
        this.products.pop();
    }

    listProducts() {
        return this.products;
    }

    calculateSubtotal() {
        return this.products.reduce((acc, current) => {
            return acc + current.price;
        }, 0);
    }
}

class Discount {
    apply(sybtotal) {
        return sybtotal;
    }
}

class NoDiscount extends Discount {
    apply(sybtotal) {
        return sybtotal;
    }
}
class PercentageDiscount extends Discount {
    constructor(percent) {
        super();
        this.percent = percent;
    }

    apply(sybtotal) {
        return sybtotal - (sybtotal * this.percent / 100);
    }
}

class FixedAmountDiscount extends Discount {
    constructor(amount) {
        super();
        this.amount = amount;
    }

    apply(subtotal) {
        return Math.max(0, subtotal - this.amount);
    }
}

class PaymentService {
    constructor(type, amount) {
        this.type = type;
        this.amount = amount;
    }
}

class PaymentCard {
    pay(amount) {
        console.log(`Paying ${amount} with card`);
        return true;
    }
}

class PaymentPaypal {
    pay(amount) {
        console.log(`Paying ${amount} with PayPal`);
        return true;
    }
}

class PaymentCrypto {
    pay(amount) {
        console.log(`Paying ${amount} with crypto`);
        return true;
    }
}


class Notification {
    send(user, message) {
        throw new Error("send() must be implemented");
    }
}

class EmailNotification extends Notification {
    send(user, message) {
        console.log(`Email sent to ${user.name}: ${message}`);
    }
}

class SMSNotification extends Notification {
    send(user, message) {
        console.log(`SMS sent to ${user.name}: ${message}`);
    }
}

class TelegramNotification extends Notification {
    send(user, message) {
        console.log(`Telegram sent to ${user.name}: ${message}`);
    }
}
class Checkout {
    constructor(payment, discount, notification, repository) {
        this.payment = payment;
        this.discount = discount;
        this.notification = notification;
        this.repository = repository;
    }

    checkout(order) {
        if (order.listProducts().length === 0) {
            throw new Error("Cannot pay for empty order");
        }

        const subtotal = order.calculateSubtotal();
        const total = this.discount.apply(subtotal);

        const success = this.payment.pay(total);

        if (success) {
            order.status = "PAID";

            this.notification.send(
                order.user,
                `Your order was paid successfully. Total: $${total}`
            );

            this.repository.save(order);
        }
    }
}

class OrderRepository {
    save(order) {
        throw new Error("save() must be implemented");
    }
}

class InMemoryOrderRepository extends OrderRepository {
    constructor() {
        super();
        this.orders = [];
    }

    save(order) {
        this.orders.push(order);

        console.log("Order saved");
    }
}

const user = new User(1, "Erik");

// Products
const iphone = new Product(1, "iPhone", 1000);
const airpods = new Product(2, "AirPods", 200);
const macbook = new Product(3, "MacBook", 2000);

// Order
const order = new Order(user);

order.addProducts(iphone);
order.addProducts(airpods);
order.addProducts(macbook);

// Products
console.log("Products:");
console.log(order.listProducts());

// Subtotal
const subtotal = order.calculateSubtotal();

console.log("Subtotal:", subtotal);

// Discount
const discount = new PercentageDiscount(10);

// Payment
const payment = new PaymentCard();

// Notification
const notification = new EmailNotification();

// Repository
const repository = new InMemoryOrderRepository();

// Checkout
const checkout = new Checkout(
    payment,
    discount,
    notification,
    repository
);

// Checkout
checkout.checkout(order);

// Final result
console.log("Order status:", order.status);
console.log("Saved orders:", repository.orders);
