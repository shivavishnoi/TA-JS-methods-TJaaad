let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.
// console.log([...words].sort((a, b) => a.length - b.length).pop())
// - Convert the above array "words" into an array of length of word instead of word.
// console.log(words.map((word) => word.length))
// - Create a new array that only contains word with atleast one vowel.
// console.log(words.filter((word) => { 
//   if (word.toLowerCase().includes(`a`) ||
//     word.toLowerCase().includes(`i`) ||
//     word.toLowerCase().includes(`e`) ||
//     word.toLowerCase().includes(`o`) ||
//     word.toLowerCase().includes(`u`))
//     return true
//   else false
// }))
// - Find the index of the word "rhythm"
// console.log(words.indexOf(`rhythm`))
// - Create a new array that contians words not starting with vowel.
// console.log(words.filter((word) => {
//   if (word.startsWith(`a`) ||
//     word.startsWith(`e`) ||
//     word.startsWith(`i`) ||
//     word.startsWith(`o`) ||
//     word.startsWith(`u`)
//   ) {

//     return false
//   }
//   else {
//     return true
//   }
// }))
// - Create a new array that contianse words not ending with vowel
// console.log(words.filter((word) => {
//   if (word.endsWith(`a`) ||
//     word.endsWith(`e`) ||
//     word.endsWith(`i`) ||
//     word.endsWith(`o`) ||
//     word.endsWith(`u`)
//   ) {

//     return false
//   }
//   else {
//     return true
//   }
// }))

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
// let sumArray = function (array) {
//   return array.reduce((acc, num) => {
//     acc += num
//     return acc
//   }, 0)
// }
// console.log(sumArray(numbers));
// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
let arr = numbers.filter((num) => {
  return num % 3 == 0
})
// - Create a new array that contains only even numbers
arr = numbers.filter((num) => {
  return num % 2 == 0
})
// - Create  a new array that contains only odd numbers.
arr = numbers.filter((num) => {
  return num % 2 != 0
})
// - Create a new array that should have true for even number and false for odd numbers.
arr = numbers.map((num) => {
  return num % 2 == 0
})
// - Sort the above number in assending order.
arr = numbers.sort((a, b) => a - b)
// - Does sort mutate the original array?
//yes
// - Find the sum of the numbers in the array.

//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers
// let averageNumbers = function (arr) {
//   return arr.reduce((acc, num) => {
//     acc += num
//     return acc
//   }, 0) / arr.length
// }
let words2 = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
let averageWordLength = function (array) {
  let lengthArray = array.map((word) => word.length)
  return lengthArray.reduce((acc, num) => acc += num) / array.length
}
