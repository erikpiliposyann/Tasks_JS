class Movie {
    constructor(name, duration, genre, ageLimit, description) {
        this.name = name;
        this.duration = duration;
        this.genre = genre;
        this.ageLimit = ageLimit;
        this.description = description;
    }
}

class Hall {
    constructor(number, capacity) {
        this.number = number;
        this.capacity = capacity;
        this.availableSeats = capacity;
    }
}

class Session {
    constructor(movie, hall, time) {
        this.movie = movie;
        this.hall = hall;
        this.time = time;
        this.bookedSeats = new Set();
    }
}

class Ticket {
    constructor(session, seatNumber, price){
        this.session = session;
        this.seatNumber = seatNumber;
        this.price = price;
    }
}

class Cinema {
    constructor(name, address) {
        this.name = name;
        this.address = address;
        this.movies = [];
        this.halls = [];
        this.sessions = [];
    }

    addMovie(movie) {
        this.movies.push(movie);
    }

    addHall(hall) {
        this.halls.push(hall);
    }

    addSession(session) {
        this.sessions.push(session);
    }
}

class Client {
    #tickets

    constructor(name) {
        this.name = name;
        this.#tickets = [];
    }

    buyTicket(ticket) {
        const session = ticket.session;
    
        if (session.hall.availableSeats <= 0) {
            return false;
        }
        
        if (session.bookedSeats.has(ticket.seatNumber)) {
            return false;
        }
    
        session.bookedSeats.add(ticket.seatNumber);
        session.hall.availableSeats--;
        this.#tickets.push(ticket);
    
        return true;
    }
    
    getTickets() {
        return [...this.#tickets]; 
    }
}
// Movies
const avatar = new Movie(
    "Avatar 2",
    192,
    "Sci-Fi",
    13,
    "A science fiction movie."
);

const batman = new Movie(
    "The Batman",
    176,
    "Action",
    16,
    "Batman fights crime in Gotham."
);

// Clients
const client1 = new Client("Erik");
const client2 = new Client("Anna");

// Halls
const hall1 = new Hall(1, 120);
const hall2 = new Hall(2, 80);

// Sessions
const session1 = new Session(avatar, hall1, "18:00");
const session2 = new Session(batman, hall2, "20:30");

// Cinema
const cinema = new Cinema(
    "Cinema Star",
    "Yerevan, Armenia"
);

// Add data
cinema.addMovie(avatar);
cinema.addMovie(batman);

cinema.addHall(hall1);
cinema.addHall(hall2);

cinema.addSession(session1);
cinema.addSession(session2);

// Tickets
const ticket1 = new Ticket(session1, 15, 3500);
const ticket2 = new Ticket(session1, 15, 3500); // same seat
const ticket3 = new Ticket(session2, 8, 4000);

// Buy tickets
console.log(client1.buyTicket(ticket1)); // true
console.log(client2.buyTicket(ticket2)); // false
console.log(client2.buyTicket(ticket3)); // true

// Client tickets
console.log("Client 1 tickets:");
console.log(client1.getTickets());

console.log("Client 2 tickets:");
console.log(client2.getTickets());

// Hall info
console.log("Hall 1 available seats:", hall1.availableSeats);
console.log("Hall 2 available seats:", hall2.availableSeats);

// Booked seats
console.log("Session 1 booked seats:");
console.log([...session1.bookedSeats]);

console.log("Session 2 booked seats:");
console.log([...session2.bookedSeats]);

// Cinema info
console.log(cinema);
