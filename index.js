const User = require('./user')
const Bungalow = require('./bungalow')

function signUp(firstName, lastName, email, age) {
  return new User(firstName, lastName, email, age)
}

const dogancay = new Bungalow('Geyve, Sakarya, Turkey', 5, 1250)
// const numan = new User("Numan", "Duman", "nsduman@gmail.com", 29);
const numan = signUp('Numan', 'Duman', 'nsduman@gmail.com', 29)

numan.book(dogancay, '22.08.2022', '29.08.2022')
numan.review(dogancay, 'It was a wonderful place, the view and the atmosphere were perfect!')

// console.log(dogancay);
// console.log(numan);

console.log(numan.profile)
