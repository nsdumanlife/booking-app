const User = require('./user')

module.exports = function signUp(firstName, lastName, email, age) {
  return new User(firstName, lastName, email, age)
}
