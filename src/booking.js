const { v4: uuidv4 } = require('uuid')

class Booking {
  constructor(guest, bungalow, checkInDate, checkOutDate) {
    this.id = uuidv4()
    this.guest = guest
    this.bungalow = bungalow
    this.checkInDate = checkInDate
    this.checkOutDate = checkOutDate
    this.status = 'confirmed' // confirmed, cancelled, denied
  }
}

module.exports = Booking
