// String method

const sentence = 'the quick brown fox jumps over the lazy dog'


// length of a String
console.log(sentence.length)

// convert to uppercase
document.write(sentence.toUpperCase())

// convert to lowercase
document.write(sentence.toLowerCase())

// cut some part pf a string
console.log(sentence.slice(0, 11))

// finding index of fox
  console.log(sentence.indexOf('fox'))

// finding index of foxes
  console.log(indexOf('foxes'))

//   replace a particular string 
console.log(sentence.replace('dog','goat'))

// replace all o letter with 0
console.log(sentence.replaceAll('o','0'))

// check if jump exist
console.log(sentence.includes('jump'))

// check if sentence start with 'the' 
console.log(sentence.startsWith('the'))

// check if sentence start with 'The' 
console.log(sentence.startsWith('The'))

// add strings together 
console.log('Alphabets: ',concat(sentence))

// find where a string end 
console.log(sentence.endswith('dog'))

// find a character at a particular index
console.log(sentence.charAt(16))

// convert a string to an array 
console.log(sentence.split('  '))

// repeat a particular string 
console.log('sentence',repeat(2))

const num = 80
console.log(typeof num.toString())

console,log(string(num))