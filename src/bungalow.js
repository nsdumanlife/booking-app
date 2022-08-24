class Bungalow {
  constructor(location, capacity, price) {
    this.location = location
    this.availability = true
    this.bookedDates = []
    this.city = ''
    this.capacity = capacity
    this.price = price
    this.reviews = [] // user's reviews
    this.rate = 0 // average stars are given by users
    this.photos = [] //
    this.services = [] // internet, barbecue,hot tub, pool, hot water, kitchen etc.
    this.guests = []
    // id
  }
}

module.exports = Bungalow
