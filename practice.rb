# # Write a method that prints out the numbers 1 to 1000 that are divisible by 3.
# def print_numbers_divisible_by_three
#   index = 1
#   while index <= 1000
#     if index % 3 == 0
#       puts index
#     end
#     index += 1
#   end
# end
# print_numbers_divisible_by_three


# # Write a method that accepts an array of strings and prints out every other string.
# def print_every_other_item(strings)
#   index = 0
#   strings.each do |string|
#     if index % 2 == 0
#       puts string
#     end
#     index += 1
#   end
# end
# print_every_other_item(["a", "b", "c", "d", "e"])


# # Write a method that accepts an array of numbers and returns the sum.
# def compute_sum(numbers)
#   sum = 0
#   numbers.each do |number|
#     sum += number
#   end
#   return sum
# end
# puts compute_sum([2, 4, 5])


# # Start with the hash: city_populations = {chi: 2700000}
# # Add populations to the city_populations hash for New York City (8.4 million) and San Francisco (800,000).
# # The result should be: {chi: 2700000, nyc: 8400000, sf: 800000}
# city_populations = {chi: 2700000}
# city_populations[:nyc] = 8400000
# city_populations[:sf] = 800000
# p city_populations



# # Write a method that prints out every number from 1 to 100. 
# def one_to_a_hundred
#   num = 0
#   while num < 100
#     num += 1
#     puts num
#   end
# end

# one_to_a_hundred


# # Write a method that prints out every other number from 1 to 100. (That is, 1, 3, 5, 7 … 99).
# def every_other_number
#   num = 0
#   while num < 100
#     if num % 2 != 0
#       puts num
#     end
#     num += 1
#   end
# end
# every_other_number


# # Write a method that accepts an array of numbers as a parameter, and counts how many 55’s there are in the array.
# def num_55s(numbers)
#   count = 0
#   numbers.each do |num|
#     if num == 55
#       count += 1
#     end
#   end
#   puts count
# end

# num_55s([1, 55, 23, 31, 55, 1002, 55, 2])


# # Write a method that accepts an array of strings and returns a new array that has the string "awesomesauce" inserted between every string. 
# # For example, if the initial array is ["a", "b", "c", "d", "e"], then the returned array should be ["a", "awesomesauce", "b", "awesomesauce", "c", "awesomesauce", "d", "awesomesauce", "e"].

# def awesomesauced(strings)
#   new_array = []
#   index = 0
#   while index < strings.length
#     new_array << strings[index]
#     if index != strings.length - 1
#       new_array << "awesomesauce"
#     end
#     index += 1
#   end
#   p new_array
# end

# awesomesauced(["a", "b", "c", "d", "e"])


# # Start with the hash: item_amounts = {chair: 5, table: 2}
# # Someone just bought two chairs. Change the hash such that the chair amount is 3.
# # The final result should be: {chair: 3, table: 2}
# item_amounts = {chair: 5, table: 2}
# item_amounts[:chair] -= 2
# p item_amounts


# # Start with the hash: item_amounts = {chair: 5, table: 2}
# # You received 7 desks to sell. Change the hash to include desks.
# # The final result should be: {chair: 5, table: 2, desk: 7}
# item_amounts = {chair: 5, table: 2}
# item_amounts[:desks] = 7;
# p item_amounts


# # Write a method that accepts a number and returns its factorial.
# # For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.
# def factorial(num)
#   product = 1
#   while num > 0
#     product *= num
#     num -= 1
#   end
#   puts product
# end

# factorial(6)


# # Write a method that accepts two arrays of numbers, and prints the sum of every combination of numbers from first and second array. 
# # For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should print a list: 101, 501, 1001, 105, 505, 1005, 110, 510, 1010].

# def print_sums(arr1, arr2)
#   arr1.each do |num1|
#     arr2.each do |num2|
#       p num1 + num2
#     end
#   end
# end

# print_sums([1, 5, 10], [100, 500, 1000])

# # Write a function that accepts an array of strings and returns a new array containing every other string from the original array. For example, if the input is ["a", "b", "c", "d", "e", "f"], the output should be ["a", "c", "e"].

# def select_even_items(strings)
#   result = []
#   index = 0
#   strings.each do |string|
#     if index % 2 == 0
#       result << string
#     end
#     index = index + 1
#   end
#   result
# end
# p select_even_items(["a", "b", "c", "d", "e", "f"])


# # Write a method that accepts one argument - an array of numbers. The method should return the greatest number. For example, if the input is [5, 4, 8, 1, 2], the output should be 8.

# def max(numbers)
#   current_max = numbers[0]
#   numbers.each do |number|
#     if number > current_max
#       current_max = number
#     end
#   end
#   current_max
# end
# p max([5, 4, 8, 1, 2])


# # Write a method that accepts one argument - an array of numbers that are in ascending order. The method that returns a new array with the same values in descending order. However, do not use the "reverse" method built into Ruby.

# def descending(numbers)
#   result = []
#   index = numbers.length - 1
#   numbers.length.times do
#     result << numbers[index]
#     index = index - 1
#   end
#   result
# end
# p descending([1, 3, 5, 7])


# # 1. Write a function that takes in an array of numbers and returns its sum.
# def sum(numbers)
#   result = 0
#   index = 0
#   while index < numbers.length
#     result += numbers[index]
#     index += 1
#   end
#   result
# end

# p sum([1, 2, 3])


# # 2. Write a function that takes in an array of strings and returns the smallest string.
# def smallest_string(strings)
#   result = strings[0]
#   index = 0
#   while index < strings.length
#     if strings[index].length < result.length
#       result = strings[index]
#     end
#     index += 1
#   end
#   result
# end

# p smallest_string(["apple", "orange", "banana", "kiwi"])


# # 3. Write a function that takes in an array of numbers and returns a new array with the numbers in reverse order.
# def reversed_nums(numbers)
#   result = []
#   index = numbers.length - 1
#   while index >= 0 
#     result << numbers[index]
#     index -= 1
#   end
#   result
# end

# p reversed_nums([1, 2, 4])


# # 4. Write a function that takes in an array of words and returns the number of words that begin with the letter “a”.
# def a_words(words)
#   count = 0
#   words.each do |word|
#     if word[0].downcase == "a"
#       count += 1
#     end
#   end
#   count
# end

# p a_words(["apple", "orange", "banana", "A pear"])


# # 5. Write a function that takes in an array of strings and joins them together to make a single string separated by commas.
# def smash_with_commas(strings)
#   result = ""
#   strings.each do |string|
#     result += "#{string},"
#   end
#   result.chop
# end

# p smash_with_commas(["apple", "orange", "banana", "kiwi"])

# # 6. Write a function that takes in an array of numbers and returns the product of all the numbers (each number multiplied by each other). 
# def multiply(numbers)
#   product = 1
#   numbers.each do |num|
#     product *= num
#   end
#   product
# end

# p multiply([2, 3, 5, 1])


# # 7. Write a function that takes in an array of numbers and returns the two smallest numbers.
# def two_smallest_numbers(numbers)
#   smallest_index = 0
#   smallest = numbers[smallest_index]
#   index = 0 
#   while index < numbers.length
#     if numbers[index] < smallest
#       smallest = numbers[index]
#       smallest_index = index
#     end
#     index += 1
#   end
#   second_smallest = numbers[smallest_index - 1]
#   index = 0
#   while index < numbers.length
#     if numbers[index] < second_smallest && index != smallest_index
#       second_smallest = numbers[index]
#     end
#     index += 1
#   end
#   [smallest, second_smallest]
# end

# p two_smallest_numbers([4, 7, 3, 6, 9, 10])


# # 8. Write a function that takes in an array of numbers and returns a count of how many zeros are in the array.
# def zero_count(numbers)
#   count = 0
#   numbers.each do |num|
#     if num == 0
#       count += 1
#     end
#   end
#   count
# end
# p zero_count([9, 32, 0, 2, 0, 12, 5, 2, 0, 1])


# # 9. Write a function that takes in an array of numbers and returns true if all the numbers are bigger than 10, otherwise returns false.
# def all_big?(numbers)
#   result = true
#   numbers.each do |num|
#     if num <= 10
#       return false
#     end
#   end
#   result
# end

# p all_big?([11, 3, 23, 35])



# 10. Write a function that takes in an array of words and returns the number of times the letter “a” appeared in total.
def a_count(words)
  count = 0
  arr_index = 0
  while arr_index < words.length
    word = words[arr_index]
    str_index = 0
    while str_index < word.length
      if word[str_index] == "a"
        count += 1
      end
      str_index += 1
    end
    arr_index += 1
  end
  count
end

p a_count(["apple", "orange", "banana"])
