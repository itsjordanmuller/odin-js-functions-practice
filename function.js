// TOP Provided Animal Function
function favoriteAnimal(animal) {
    return animal + " are my favorite animal!"
}
console.log(favoriteAnimal('Cats'))

// Add 7 to Input
function add7(input1) {
  return input1 + 7
}
console.log(add7(1))

// Take 2 Numbers and Return the Product (Multiply Them)
function multiply(input2, input3) {
  return input2 * input3
}
console.log(multiply(10, 5))

// Capitalize String First Letter Only
function capitalize(input4) {
  return  (input4.charAt(0)).toUpperCase().concat((input4.slice(1, input4.length)).toLowerCase())
}
console.log(capitalize("JoRdAn"))