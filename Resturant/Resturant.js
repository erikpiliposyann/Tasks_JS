class User {
    static nextId = 1;
  
    constructor(name, email, phone, address, type) {
      this.id = User.nextId++;
      this.name = name;
      this.email = email;
      this.phone = phone;
      this.address = address;
      this.type = type;
    }
  
    generateProfileReport() {
      console.log(`Generating profile report for ${this.name}`);
    }
}
  
  // __________________________________________________________
  // Notify
  // __________________________________________________________
  
class Notify {
    constructor() {
      if (new.target === Notify) {
        throw new Error("Notify is an abstract class");
      }
    }
  
    send(user, message) {
      throw new Error("send() must be implemented");
    }
}
  
class SendSms extends Notify {
    send(user, message) {
      console.log(`Sending SMS to ${user.phone}: ${message}`);
    }
}
  
class SendEmail extends Notify {
    send(user, message) {
      console.log(`Sending email to ${user.email}: ${message}`);
    }
}
  
class NotificationService {
    constructor(notification) {
      this.notification = notification;
    }
  
    notify(user, message) {
      return this.notification.send(user, message);
    }
}
  
  // __________________________________________________________
  // Restaurant
  // __________________________________________________________
  
class Restaurant {
    constructor(id, name, address) {
      this.id = id;
      this.name = name;
      this.address = address;
      this.menu = [];
    }
  
    addDish(dish) {
      this.menu.push(dish);
    }
  
    removeDish(dishId) {
      this.menu = this.menu.filter(
        dish => dish.id !== dishId
      );
    }
}
  
  // __________________________________________________________
  // Dish
  // __________________________________________________________
  
class Dish {
    constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
  
    calculatePrice() {
      return this.price;
    }
}
  
class Pizza extends Dish {
    calculatePrice() {
      return this.price * 0.9;
    }
}
  
class Burger extends Dish {
    calculatePrice() {
      return this.price * 0.95;
    }
}
  
class Dessert extends Dish {
    calculatePrice() {
      return this.price * 0.8;
    }
}
  
  // __________________________________________________________
  // Order
  // __________________________________________________________
  
class Order {
    constructor(id, user, restaurant) {
      this.id = id;
      this.user = user;
      this.restaurant = restaurant;
      this.items = [];
      this.status = "created";
    }
  
    addItem(dish, quantity) {
      this.items.push({
        dish,
        quantity
      });
    }
  
    calculateTotal() {
      let total = 0;
  
      for (const item of this.items) {
        total +=
          item.dish.calculatePrice() *
          item.quantity;
      }
  
      return total;
    }
  
    cancel() {
      if (this.status === "delivered") {
        throw new Error(
          "Delivered order cannot be cancelled"
        );
      }
  
      this.status = "cancelled";
    }
}
  
  // __________________________________________________________
  // Payment
  // __________________________________________________________
  
class Payment {
    pay(amount) {
      throw new Error("pay() must be implemented");
    }
  }
  
class CardPayment extends Payment {
    pay(amount) {
      console.log(`Paying ${amount} with card`);
    }
  
    refund(amount) {
      console.log(`Refunding ${amount} to card`);
    }
}
  
class PaypalPayment extends Payment {
    pay(amount) {
      console.log(`Paying ${amount} with PayPal`);
    }
  
    refund(amount) {
      console.log(`Refunding ${amount} from PayPal`);
    }
}
  
class CryptoPayment extends Payment {
    pay(amount) {
      console.log(`Paying ${amount} with crypto`);
    }
  
    refund(amount) {
      console.log(`Refunding ${amount} from crypto`);
    }
}
  
class CashPayment extends Payment {
    pay(amount) {
      console.log(`Paying ${amount} with cash`);
    }
}
  
class PaymentService {
    constructor(payment) {
      this.payment = payment;
    }
  
    pay(amount) {
      return this.payment.pay(amount);
    }
  
    refund(amount) {
      if (typeof this.payment.refund !== "function") {
        throw new Error(
          "This payment method does not support refunds"
        );
      }
  
      return this.payment.refund(amount);
    }
}
  
  // __________________________________________________________
  // Delivery
  // __________________________________________________________
  
class Delivery {
    deliver(order) {
      throw new Error(
        "deliver() must be implemented"
      );
    }
}
  
class CourierDelivery extends Delivery {
    deliver(order) {
      console.log(
        `Courier delivers order ${order.id} to ${order.user.address}`
      );
    }
}

class PickupDelivery extends Delivery {
    deliver(order) {
      console.log(
        `User will pick up order ${order.id}`
      );
    }
}
  
class DroneDelivery extends Delivery {
    deliver(order) {
      console.log(
        `Drone delivers order ${order.id}`
      );
    }
}
  
class DeliveryService {
    constructor(delivery) {
      this.delivery = delivery;
    }
  
    deliver(order) {
      return this.delivery.deliver(order);
    }
}
  
  // __________________________________________________________
  // Discount
  // __________________________________________________________
  
class Discount {
    calculate(order) {
      throw new Error(
        "calculate() must be implemented"
      );
    }
}
  
class VipDiscount extends Discount {
    calculate(order) {
      return order.calculateTotal() * 0.1;
    }
}
  
class EmployeeDiscount extends Discount {
    calculate(order) {
      return order.calculateTotal() * 0.3;
    }
}
  
class NewUserDiscount extends Discount {
    calculate(order) {
      return order.calculateTotal() * 0.2;
    }
}
  
class DiscountService {
    constructor(discount) {
      this.discount = discount;
    }
  
    calculate(order) {
      return this.discount.calculate(order);
    }
}
  
  // __________________________________________________________
  // Database
  // __________________________________________________________
  
class Database {
    save(data) {
      throw new Error(
        "save() must be implemented"
      );
    }
}
  
class MySQLDatabase extends Database {
    save(data) {
      console.log(
        `Saving ${data.constructor.name} to MySQL...`
      );
    }
}
  
class PostgreSQLDatabase extends Database {
    save(data) {
      console.log(
        `Saving ${data.constructor.name} to PostgreSQL...`
      );
    }
}
  
class MongoDatabase extends Database {
    save(data) {
      console.log(
        `Saving ${data.constructor.name} to MongoDB...`
      );
    }
}
  
  // __________________________________________________________
  // OrderService
  // __________________________________________________________
  
class OrderService {
    constructor(
      database,
      paymentService,
      deliveryService,
      notificationService,
      discountService
    ) {
      this.database = database;
      this.paymentService = paymentService;
      this.deliveryService = deliveryService;
      this.notificationService = notificationService;
      this.discountService = discountService;
    }
  
    createOrder(user, restaurant, items) {
      const order = new Order(
        Date.now(),
        user,
        restaurant
      );
  
      for (const item of items) {
        order.addItem(
          item.dish,
          item.quantity
        );
      }
  
      const total = order.calculateTotal();
  
      const discount =
        this.discountService.calculate(order);
  
      const finalPrice =
        total - discount;
  
      this.paymentService.pay(finalPrice);
  
      this.deliveryService.deliver(order);
  
      this.notificationService.notify(
        user,
        "Your order has been created"
      );
  
      this.database.save(order);
  
      console.log(
        `Order created. Final price: ${finalPrice}`
      );
  
      return order;
    }
}
