let express = require("express");
let app = express();
let PORT = 3000;
app.listen(PORT, () => {
  console.log("This server is running.");
});
// Exercise 1: Multiply All Numbers in an Array
let numbers = [1, 2, 3, 4, 5];
function multiplyNumber(numbers, multiplier) {
  for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i] * multiplier;
  }
  return numbers;
}
app.get("/numbers/multiply", (req, res) => {
  let multiplier = parseFloat(req.query.multiplier);
  let result = multiplyNumber(numbers, multiplier);
  res.json({ result: result });
});
// Exercise 2: Concatenate Strings
let strings =  ['hello', 'world', 'javascript', 'node'];
function concatStrings(strings, suffix) {
  for (let i = 0; i < strings.length; i++) {
    strings[i] = strings[i] + suffix;
  }
  return strings;
}
app.get("/strings/concat", (req, res) => {
  let suffix = req.query.suffix;
  let result = concatStrings(strings, suffix);
  res.json({ result: result });
});
// Exercise 3: Remove All Odd Numbers from an Array
let numbersArray = [1, 2, 3, 4, 5];
function removeOddNumbers(numbersArray) {
  let updatedArray = [];
  for (let i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] % 2 === 0) {
      updatedArray.push(numbersArray[i]);
    }
  }
  return updatedArray;
}
app.get("/numbers/remove-odds", (req, res) => {
  let result = removeOddNumbers(numbersArray);
  res.json({ result: result });
});
// Exercise 4: Join All Strings in an Array
let stringsArray = ['hello', 'world', 'javascript', 'node'];
function joinString(stringsArray) {
  let joinedString = '';
  for (let i = 0; i < stringsArray.length; i++) {
    joinedString = joinedString + stringsArray[i] + " ";
  }
  return joinedString;
}
app.get("/strings/join", (req, res) => {
  let result = joinString(stringsArray);
  res.json({ result: result });
});
// Exercise 5: Double All Numbers in an Array.
let array = [1, 2, 3, 4, 5];
function doubleNumbers(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] * 2;
  }
  return array;
}
app.get("/numbers/double", (req, res) => {
  let result = doubleNumbers(array);
  res.json({ result: result });
});