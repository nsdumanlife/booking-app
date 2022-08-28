const { v4: uuidv4 } = require('uuid')
const getDuration = require('./get-duration')

class Booking {
  constructor(guest, bungalow, checkInDate, checkOutDate) {
    this.id = uuidv4()
    this.guest = guest
    this.bungalow = bungalow
    this.checkInDate = checkInDate
    this.checkOutDate = checkOutDate
    this.status = 'confirmed' // confirmed, cancelled
  }

  get duration() {
    return getDuration(this.checkInDate, this.checkOutDate)
  }
}

module.exports = Booking
