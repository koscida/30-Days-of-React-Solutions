// Notes

// forEach
// map
// filter
// reduce
// find
// findIndex
// some
// every

console.log('-- Part 11: Functional Programming --')

const products_p11 = [
	{ product: 'banana', price: 3 },
	{ product: 'mango', price: 6 },
	{ product: 'potato', price: ' ' },
	{ product: 'avocado', price: 8 },
	{ product: 'coffee', price: 10 },
	{ product: 'tea', price: '' },
]

// create helper function to check for number data type
// sourced from: https://stackoverflow.com/questions/1303646/check-whether-variable-is-number-or-string-in-javascript
const isNumber = (n) => !isNaN(parseFloat(n)) && !isNaN(n - 0)

// 1. Print the price of each product using forEach
console.log("1. Print price of each product")
products_p11.forEach( ele => console.log(ele.price) )

// 2. Print the product items as follows using forEach
// The price of banana is 3 euros.
// The price of mango is 6 euros.
// The price of potato is unknown.
// The price of avocado is 8 euros.
// The price of coffee is 10 euros.
// The price of tea is unknown.
console.log("2. Print product items")
products_p11.forEach( ele => console.log(`The price of ${ele.product} is ${isNumber(ele.price)?ele.price+' euros':'unknown'}`) )

// 3. Calculate the sum of all the prices using forEach
console.log("3. Calculate the sum using forEach")
sum = 0
products_p11.forEach( ele => sum += isNumber(ele.price)?ele.price:0 )
console.log(sum)

// 4. Create an array of prices using map and store it in a variable prices
console.log("4. Create array using map")
pricesArray = products_p11.map( x => x.price)
console.log(pricesArray)

// 5. Filter products with prices
console.log("5. Filter products with prices")
producesWithPrices = products_p11.filter( x => isNumber(x.price) )
console.log(producesWithPrices)

// 6. Use method chaining to get the sum of the prices(map, filter, reduce)
console.log("6. Get the sum using method chaining")
console.log(products_p11.map(x => x.price).filter(x => isNumber(x)).reduce( (prev, curr) => prev + curr))

// 7. Calculate the sum of all the prices using reduce only
console.log("7. Calculate the sum using reduce")
console.log(products_p11.reduce( (prev, curr) => prev + (isNumber(curr.price) ? curr.price : 0), 0 ))

// 8. Find the first product which doesn't have a price value
console.log("8. First product without price")
console.log(products_p11.find( x => !isNumber(x.price) ))

// 9. Find the index of the first product which does not have price value
console.log("9. Index of first product without a price")
console.log(products_p11.findIndex( x => !isNumber(x.price) ))

// 10. Check if some products do not have a price value
console.log("10. If some products do not have a price")
console.log(products_p11.some( x => !isNumber(x.price) ))

// 11. Check if all the products have price value
console.log("11. If all products have a price")
console.log(products_p11.every( x => isNumber(x.price) ))

// 12. Explain the difference between forEach, map, filter and reduce
// forEach - iterates through the array, does not return
// map - iterates through the array and processes each element, returns new array with altered values the same same size as the original array
// filter - iterates through the array and tests a condition, returns a new array with the same values that may be smaller than the original array

// 13. Explain the difference between filter, find and findIndex
// filter - iterates through the array for elements that meets the condition, returns a new array with all matching elements
// find - iterates through an array for the first element that meets the condition, returns the element
// findIndex - iterates throught an array for the first element that meets the condition, returns the index

// 14. Explain the difference between some and every
// some - tests if at least one element meets the condition, returns a boolean
// every - tests if every element meets the condition, returns a boolean
