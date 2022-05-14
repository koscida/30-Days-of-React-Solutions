console.log('-- Part 8: Functions --')


// ////////////////// //
// Exercises: Level 1 //
// ////////////////// //

// 1. Declare a function fullName and it takes firstName, lastName as a parameter and it returns your full - name.
// skip

// 2. Declare a function addNumbers and it takes two two parameters and it returns sum.
// skip

// 3. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates _areaOfCircle
// skip

// 4. Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. 
// Write a function which convert oC to oF convertCelciusToFahrenheit.
// skip

// 5. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. 
// Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.
// Check if a person is underweight, normal, overweight or obese based the information given below.
//	The same groups apply to both men and women.
//	Underweight: BMI is less than 18.5
//	Normal weight: BMI is 18.5 to 24.9
//	Overweight: BMI is 25 to 29.9
//	Obese: BMI is 30 or more
// skip

// Write a function called checkSeason, it takes a month parameter and returns the season: Autumn, Winter, Spring or Summer.
// skip




// ////////////////// //
// Exercises: Level 2 //
// ////////////////// //

console.log('- Exercises: Level 2 -')

// 1. Quadratic equation is calculated as follows: ax2 + bx + c = 0. 
// Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
// skip

// 2. Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
// skip

// 3. Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
function showDateTime() {
	d = new Date
	console.log(d.toUTCString())
}
showDateTime()

// 4. Declare a function name swapValues. This function swaps value of x to y.
// skip

// 5. Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
// skip

// 6. Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
console.log("6. capitalizeArray")
const capitalizeArray = arr => arr.map( ele => ele.charAt(0).toUpperCase() + ele.slice(1) )
lowercaseArray = ["apple","orange","lemon"]
console.log(lowercaseArray)
capitalArray = capitalizeArray(lowercaseArray)
console.log(capitalArray)

// 7. Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
//skip

// 8. Declare a function name removeItem. It takes an index parameter and it returns an array after removing an ite
// skip

// 9. Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
console.log("9. evensAndOdds")
const evensAndOdds = num => {
	numArray = Array.from(String(num), num => Number(num))
	evensOddsCount = [0,0]
	numArray.forEach(element => (element % 2 == 0) ? evensOddsCount[0]++ : evensOddsCount[1]++)
	return evensOddsCount
}
[12, 12345, 6677, 8325413659613798].forEach(num => {
	console.log(`${num}: ` + evensAndOdds(num))
});

// 10. Write a function which takes any number of arguments and return the sum of the arguments
console.log("10. sumArgs")
const sumArgs = (...args) => {
	sum = 0
	return args.reduce( (prev, curr) => prev + curr, sum)
}
console.log(sumArgs(1))
console.log(sumArgs(1, 2, 3, 4, 5))
console.log(sumArgs(1,1,1))

// 11. Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
console.log("11. userIdGenerator")
const userIdGenerator = () => (Math.random() + 1).toString(36).slice(2,9)
console.log(userIdGenerator())


// ////////////////// //
// Exercises: Level 3 //
// ////////////////// //

console.log('- Exercises: Level 3 -')

// 1. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). 
// One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
//skip

// 2. Write a function generateColors which can generate any number of hexa or rgb colors.
//skip

// 3. Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
//skip

// 4. Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
console.log("4. factorial")
const factorial = (num) => {
	arr = Array.from({length: num/2 - 1}, (_, i) => i + 2)
	for(i=0;i<arr.length;i++) {
		if(num % arr[i] == 0)
			return arr[i]
	}
}
console.log('10: ' + factorial(10))
console.log('17: ' + factorial(17))
console.log('25: ' + factorial(25))

// 5. Call your function isEmpty, it takes a parameter and it checks if it is empty or not
//skip

// 6. Write a function called average, it takes an array parameter and returns the average of the items. 
// Check if all the array items are number types. If not give return reasonable feedback.
//skip
