class User {
  constructor(firstName, lastName, email, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.bookings = [];
    this.reviews = [];
    // user id
  }

  get profile() {
    return `${this.firstName} has ${this.bookings.length} bookings.`;
  }

  book(bungalow, checkInDate, checkOutDate) {
    //date object
    if (bungalow.availability) {
      bungalow.guests.push(this);
      this.bookings.push(); // how can i track the bookings? Do i need a booking class?

      //TODO: check-in, check-out dates need to push booked dates
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
  cancelBooking() {}
}

module.exports = User;
