class Bungalow {
  constructor(location, capacity, price) {
    this.location = location;
    this.availability = true;
    this.bookedDates = [];
    this.city = "";
    this.capacity = capacity;
    this.price = price;
    this.reviews = []; // user's reviews
    this.rate = 0; // average stars are given by users
    this.photos = []; //
    this.services = []; // internet, barbecue,hot tub, pool, hot water, kitchen etc.
    this.guests = [];
  }
}

class User {
  constructor(firstName, lastName, email, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.bookings = [];
    this.reviews = [];
  }

  book(bungalow, checkInDate, checkOutDate) {
    if (bungalow.availability) {
      bungalow.guests.push(this);
      this.bookings.push(); // how can i track the bookings? Do i need a booking class?

      //TODO: check-in, check-out dates need to psuh booked dates
      //    send confirmation email to user
    }
  }
  review(bungalow, message) {
    if (bungalow.guests.includes(this)) {
      bungalow.reviews.push(message);
      this.reviews.push(message);
    }
  }
  pay() {}
  cancel() {}
}

function signUp(firstName, lastName, email, age) {
  return new User(firstName, lastName, email, age);
}

const dogancay = new Bungalow("Geyve, Sakarya, Turkey", 5, 1250);
//const numan = new User("Numan", "Duman", "nsduman@gmail.com", 29);
const numan = signUp("Numan", "Duman", "nsduman@gmail.com", 29);

numan.book(dogancay, "22.08.2022", "29.08.2022");
numan.review(
  dogancay,
  "It was a wonderful place, the view and the atmosphere were perfect!"
);

console.log(dogancay);
console.log(numan);
