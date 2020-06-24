// // # Write a method that prints out the numbers 1 to 1000 that are divisible by 3.
// // def print_numbers_divisible_by_three
// //   index = 1
// //   while index <= 1000
// //     if index % 3 == 0
// //       puts index
// //     end
// //     index += 1
// //   end
// // end
// // print_numbers_divisible_by_three
// function printNumbersDivisibleByThree() {
//   var index = 1;
//   while (index <= 1000) {
//     if (index % 3 === 0) {
//       console.log(index);
//     }
//     index += 1;
//   }
// }
// printNumbersDivisibleByThree();


// // # Write a method that accepts an array of strings and prints out every other string.
// // def print_every_other_item(strings)
// //   index = 0
// //   strings.each do |string|
// //     if index % 2 == 0
// //       puts string
// //     end
// //     index += 1
// //   end
// // end
// // print_every_other_item(["a", "b", "c", "d", "e"])
// function printEveryOtherItem(strings) {
//   var index = 0;
//   strings.forEach(function (string) {
//     if (index % 2 === 0) {
//       console.log(string);
//     }
//     index += 1;
//   });
// }
// printEveryOtherItem(["a", "b", "c", "d", "e"]);


// // # Write a method that accepts an array of numbers and returns the sum.
// // def compute_sum(numbers)
// //   sum = 0
// //   numbers.each do |number|
// //     sum += number
// //   end
// //   return sum
// // end
// // puts compute_sum([2, 4, 5])
// function computeSum(numbers) {
//   var sum = 0;
//   numbers.forEach(function (number) {
//     sum += number;
//   });
//   return sum;
// }
// console.log(computeSum([2, 4, 5]));

// // # Start with the hash: city_populations = {chi: 2700000}
// // # Add populations to the city_populations hash for New York City (8.4 million) and San Francisco (800,000).
// // # The result should be: {chi: 2700000, nyc: 8400000, sf: 800000}
// // city_populations = {chi: 2700000}
// // city_populations[:nyc] = 8400000
// // city_populations[:sf] = 800000
// // p city_populations
// var cityPopulations = { chi: 2700000 };
// cityPopulations["nyc"] = 8400000;
// cityPopulations.sf = 800000;  // same as cityPopulations["sf"]
// console.log(cityPopulations);



// // # Write a method that prints out every number from 1 to 100. 
// function oneToAHundred() {
//   var num = 0;
//   while (num < 100) {
//     num++;
//     console.log(num);
//   }
// }

// oneToAHundred();


// // # Write a method that prints out every other number from 1 to 100. (That is, 1, 3, 5, 7 … 99).
// function everyOtherNumber() {
//   var num = 0;
//   while (num < 100) {
//     if (num % 2 !== 0) {
//       console.log(num);
//     }
//     num++;
//   }
// }
// everyOtherNumber();


// // # Write a method that accepts an array of numbers as a parameter, and counts how many 55’s there are in the array.
// function num55s(numbers) {
//   var count = 0;
//   numbers.forEach(function (num) {
//     if (num === 55) {
//       count++;
//     }
//   });
//   console.log(count);
// }

// num55s([1, 55, 23, 31, 55, 1002, 55, 2]);


// // # Write a method that accepts an array of strings and returns a new array that has the string "awesomesauce" inserted between every string. 
// // # For example, if the initial array is ["a", "b", "c", "d", "e"], then the returned array should be ["a", "awesomesauce", "b", "awesomesauce", "c", "awesomesauce", "d", "awesomesauce", "e"].
// function awesomesauced(strings) {
//   var newArray = [];
//   var index = 0;
//   while (index < strings.length) {
//     newArray.push(strings[index]);
//     if (index !== strings.length - 1) {
//       newArray.push("awesomesauce");
//     }
//     index++;
//   }
//   console.log(newArray);
// }

// awesomesauced(["a", "b", "c", "d", "e"]);


// // # Start with the hash: item_amounts = {chair: 5, table: 2}
// // # Someone just bought two chairs. Change the hash such that the chair amount is 3.
// // # The final result should be: {chair: 3, table: 2}
// var itemAmounts = { chair: 5, table: 2 };
// itemAmounts["chair"] -= 2;
// console.log(itemAmounts);


// // # Start with the hash: item_amounts = {chair: 5, table: 2}
// // # You received 7 desks to sell. Change the hash to include desks.
// // # The final result should be: {chair: 5, table: 2, desk: 7}
// var itemAmounts = { chair: 5, table: 2 };
// // itemAmounts["desks"] = 7;
// itemAmounts.desks = 7;
// console.log(itemAmounts);


// // # Write a method that accepts a number and returns its factorial.
// // # For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.
// function factorial(num) {
//   var product = 1;
//   while (num > 0) {
//     product *= num;
//     num--;
//   }
//   console.log(product);
// }

// factorial(5);


// // # Write a method that accepts two arrays of numbers, and prints the sum of every combination of numbers from first and second array. 
// // # For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should print a list: 101, 501, 1001, 105, 505, 1005, 110, 510, 1010].

// function printSums(arr1, arr2) {
//   arr1.forEach(function (num1) {
//     arr2.forEach(function (num2) {
//       console.log(num1 + num2);
//     });
//   });
// }

// printSums([1, 5, 10], [100, 500, 1000]);

// function selectEvenItems(strings) {
//   var result = [];
//   var index = 0;
//   strings.forEach(function (string) {
//     if (index % 2 === 0) {
//       result.push(string);
//     }
//     index++;
//   });
//   return result;
// }

// console.log(selectEvenItems(["a", "b", "c", "d", "e", "f"]));


// function max(numbers) {
//   var currentMax = numbers[0];
//   numbers.forEach(function (number) {
//     if (number > currentMax) {
//       currentMax = number;
//     }
//   });
//   return currentMax;
// }

// console.log(max([5, 4, 8, 1, 2]));

// function descending(numbers) {
//   var result = [];
//   for (var i = numbers.length - 1; i >= 0; i--) {
//     result.push(numbers[i]);
//   }
//   return result;
// }

// console.log(descending([1, 3, 5, 7]));


// // 1. Write a function that takes in an array of numbers and returns its sum.

// function sum(numbers) {
//   var result = 0;
//   var index = 0;
//   while (index < numbers.length) {
//     result += numbers[index];
//     index++;
//   }
//   return result;
// }
// console.log(sum([1, 2, 3]));


// // 2. Write a function that takes in an array of strings and returns the smallest string.
// function smallestString(strings) {
//   var result = strings[0];
//   var index = 0;
//   while (index < strings.length) {
//     if (strings[index].length < result.length) {
//       result = strings[index];
//     }
//     index++;
//   }
//   return result;
// }

// console.log(smallestString(["apple", "orange", "banana", "kiwi"]));



// // 3. Write a function that takes in an array of numbers and returns a new array with the numbers in reverse order.
// function reversedNums(numbers) {
//   var result = [];
//   var index = numbers.length - 1;
//   while (index >= 0) {
//     result.push(numbers[index]);
//     index--;
//   }
//   return result;
// }

// console.log(reversedNums([1, 2, 4]));


// // 4. Write a function that takes in an array of words and returns the number of words that begin with the letter “a”.
// function aWords(words) {
//   var count = 0;
//   words.forEach(function (word) {
//     if (word[0].toLowerCase() === "a") {
//       count++;
//     }
//   });
//   return count;
// }

// console.log(aWords(["apple", "orange", "banana", "A pear"]));

// // 5. Write a function that takes in an array of strings and joins them together to make a single string separated by commas.
// function smashWithCommas(strings) {
//   var result = "";
//   strings.forEach(function (string) {
//     result += string + ",";
//   });
//   return result.slice(0, -1);
// }

// console.log(smashWithCommas(["apple", "orange", "banana", "kiwi"]));

// // 6. Write a function that takes in an array of numbers and returns the product of all the numbers (each number multiplied by each other). 
// function multiply(numbers) {
//   var product = 1;
//   numbers.forEach(function (num) {
//     product *= num;
//   });
//   return product;
// }

// console.log(multiply([2, 3, 5, 1]));

// // 7. Write a function that takes in an array of numbers and returns the two smallest numbers.
// function twoSmallestNumbers(numbers) {
//   var smallestIndex = 0;
//   var smallest = numbers[smallestIndex];
//   var index = 0;
//   while (index < numbers.length) {
//     if (numbers[index] < smallest) {
//       smallest = numbers[index];
//       smallestIndex = index;
//     }
//     index++;
//   }
//   var secondSmallest = numbers[smallestIndex - 1];
//   index = 0;
//   while (index < numbers.length) {
//     if (numbers[index] < secondSmallest && index !== smallestIndex) {
//       secondSmallest = numbers[index];
//     }
//     index++;
//   }
//   return [smallest, secondSmallest];
// }

// console.log(twoSmallestNumbers([3, 4, 7, 6, 9, 10]));

// // 8. Write a function that takes in an array of numbers and returns a count of how many zeros are in the array.
// function zeroCount(numbers) {
//   var count = 0;
//   numbers.forEach(function (num) {
//     if (num === 0) {
//       count++;
//     }
//   });
//   return count;
// }

// console.log(zeroCount([9, 32, 0, 2, 0, 12, 5, 2, 0, 1]));



// // 9. Write a function that takes in an array of numbers and returns true if all the numbers are bigger than 10, otherwise returns false.
// function allBig(numbers) {
//   var result = true;
//   numbers.forEach(function (num) {
//     if (num <= 10) {
//       result = false;
//     }
//   });
//   return result;
// }

// console.log(allBig([11, 23, 35]));



// // 10. Write a function that takes in an array of words and returns the number of times the letter “a” appeared in total.
// function aCount(words) {
//   var count = 0;
//   var arrIndex = 0;
//   while (arrIndex < words.length) {
//     var word = words[arrIndex];
//     var strIndex = 0;
//     while (strIndex < word.length) {
//       if (word[strIndex] === "a") {
//         count++;
//       }
//       strIndex++;
//     }
//     arrIndex++;
//   }
//   return count;
// }

// console.log(aCount(["apple", "orange", "banana"]));

var fruits = ["apple", "orange", "banana"];
for (var fruit of fruits) {
  console.log(fruit);
}