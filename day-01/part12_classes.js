console.log('-- Part 12: Classes --')

// ////////////////// //
// Exercises: Level 1 //
// ////////////////// //

console.log('- Exercises: Level 1 -')

// 1. Create an Animal class. The class will have name, age, color, legs properties and create different methods
console.log('1. Animal class')
class Animal_p12 {
	constructor(name, age, color, legs) {
		this.name = name
		this.age = age
		this.color = color
		this.legs = legs
	}
	getInfo() {
		return `${this.name} is a ${this.age}-year-old ${this.color} animal with ${this.legs} legs`
	}
}
const animal_p12 = new Animal_p12('Uzi', 4, 'white', 4)
console.log(animal_p12)

// 2. Create a Dog and Cat child class from the Animal Class.
console.log('2. Dog and Cat children classes')
class Dog_p12 extends Animal_p12 {
	constructor(name, age, color, legs, breed) {
		super(name, age, color, legs)
		this.breed = breed
	}
	getInfo() {
		return `${this.name} is a ${this.age}-year-old ${this.color} ${this.breed} with ${this.legs} legs`
	}
}
class Cat_p12 extends Animal_p12 {
	constructor(name, age, color, legs, isIndoorCat) {
		super(name, age, color, legs)
		this.isIndoorCat = isIndoorCat
	}
	getInfo() {
		return `${this.name} is a ${this.isIndoorCat?'indoor':'outdoor'} ${this.age}-year-old ${this.color} cat with ${this.legs} legs`
	}
}
const dog_p12 = new Dog_p12('Uzi', 4, 'white', 4, "Yorkie")
console.log(dog_p12)
const cat_p12 = new Cat_p12('Rags', 8, 'orange', 4, true)
console.log(cat_p12)



// ////////////////// //
// Exercises: Level 2 //
// ////////////////// //

console.log('- Exercises: Level 2 -')

// Override the method you create in Animal class
console.log("Override methods in Animal class")
console.log(dog_p12.getInfo())
console.log(cat_p12.getInfo())



// ////////////////// //
// Exercises: Level 3 //
// ////////////////// //

console.log('- Exercises: Level 3 -')

// Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) 
// and measure of variability(range, variance, standard deviation). In addition to those measures find the 
// min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics 
// and create all the functions which do statistical calculations as method for the Statistics class. Check the 
// output below.

class Statistics {
	constructor (array) {
		this.array = array
	}
	count () { return this.array.length }
	sum() { return this.array.reduce( (n,x) => n + x, 0 ) }
	min() { return this.array.reduce( (n,x) => x < n ? x : n ) }
	max() { return this.array.reduce( (n,x) => x > n ? x : n ) }
	range() { return this.max() - this.min() }
	mean() { return this.sum() / this.count() }
	median() { return this.array[Math.floor(this.count()/2)] }
	mode() { 
		// mode solution from: https://stackoverflow.com/questions/1053843/get-the-element-with-the-highest-occurrence-in-an-array
		const mode = this.array.sort((maxEle,x) =>
			this.array.filter(v => v===maxEle).length - this.array.filter(v => v===x).length
		).pop()
		const modeCount = this.array.reduce( (n,x) => n += x===mode?1:0, 0 )
		return {'mode': mode, 'count': modeCount}
	}
	var() {
		// var solution from: https://www.kindacode.com/snippet/calculate-variance-and-standard-deviation-in-javascript/
		const mean = this.mean()
		return (this.array.map( x => (x - mean) * (x - mean) ).reduce((sum, x) => sum + x)) / this.count();
	}
	std() {
		return Math.sqrt(this.var())
	}
	freqDist() {
		// frequency distribution solution from: https://www.tutorialspoint.com/frequency-distribution-of-elements-javascript
		const dist = {};
		for(let i = 0; i < this.count(); i++){
			dist[this.array[i]] = (dist[this.array[i]] || 0) + 1;
		};
		return dist;
	}
	describe() { 
		console.log('Count:', this.count()) // 25
		console.log('Sum: ', this.sum()) // 744
		console.log('Min: ', this.min()) // 24
		console.log('Max: ', this.max()) // 38
		console.log('Range: ', this.range()) // 14
		console.log('Mean: ', this.mean()) // 30
		console.log('Median: ', this.median()) // 29
		console.log('Mode: ', this.mode()) // {'mode': 26, 'count': 5}
		console.log('Variance: ', this.var()) // 17.5
		console.log('Standard Deviation: ', this.std()) // 4.2
		console.log('Frequency Distribution: ', this.freqDist())
	}
}
ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

const statistics = new Statistics(ages)

// console.log('Count:', statistics.count()) // 25
// console.log('Sum: ', statistics.sum()) // 744
// console.log('Min: ', statistics.min()) // 24
// console.log('Max: ', statistics.max()) // 38
// console.log('Range: ', statistics.range()) // 14
// console.log('Mean: ', statistics.mean()) // 30
// console.log('Median: ',statistics.median()) // 29
// console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
// console.log('Variance: ',statistics.var()) // 17.5
// console.log('Standard Deviation: ', statistics.std()) // 4.2
// console.log('Frequency Distribution: ',statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]

// you output should look like this
statistics.describe()
// Count: 25
// Sum:  744
// Min:  24
// Max:  38
// Range:  14
// Mean:  30
// Median:  29
// Mode:  (26, 5)
// Variance:  17.5
// Standard Deviation:  4.2
// Frequency Distribution: [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]