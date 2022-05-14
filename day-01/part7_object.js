console.log('-- Part 7: Objects --')

// ////////////////// //
// Exercises: Level 1 //
// ////////////////// //
console.log('- Exercises: Level 1 -')

const dog = {
	name: "Uzi",
	legs: 4,
	color: "white and grey",
	age: 4,
	breed: "Yorkie",
	bark: function () {
		return 'woof woof'
	},
	getDogInfo: function () {
		return `${this.name} is a ${this.age}-year-old ${this.color} ${this.breed} breed dog with ${this.legs} legs.`
	},
}

console.log(dog)
console.log(dog.name)
console.log(dog.legs)
console.log(dog.color)
console.log(dog.age)
console.log(dog.bark())
console.log(dog.getDogInfo())



// ////////////////// //
// Exercises: Level 2 //
// ////////////////// //
console.log('- Exercises: Level 2 -')

const usersL2 = {
	Alex: {
	  email: 'alex@alex.com',
	  skills: ['HTML', 'CSS', 'JavaScript'],
	  age: 20,
	  isLoggedIn: false,
	  points: 30
	},
	Asab: {
	  email: 'asab@asab.com',
	  skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
	  age: 25,
	  isLoggedIn: false,
	  points: 50
	},
	Brook: {
	  email: 'daniel@daniel.com',
	  skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
	  age: 30,
	  isLoggedIn: true,
	  points: 50
	},
	Daniel: {
	  email: 'daniel@alex.com',
	  skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
	  age: 20,
	  isLoggedIn: false,
	  points: 40
	},
	John: {
	  email: 'john@john.com',
	  skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
	  age: 20,
	  isLoggedIn: true,
	  points: 50
	},
	Thomas: {
	  email: 'thomas@thomas.com',
	  skills: ['HTML', 'CSS', 'JavaScript', 'React'],
	  age: 20,
	  isLoggedIn: false,
	  points: 40
	},
	Paul: {
	  email: 'paul@paul.com',
	  skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
	  age: 20,
	  isLoggedIn: false,
	  points: 40
	}
}

// 1. Find the person who has many skills in the users object.
maxSkills = 0;
maxSkillers = [];
Object.keys(usersL2).forEach(key => {
	if(usersL2[key].skills.length > maxSkills) {
		maxSkillers = [key];
	} else if(usersL2[key].skills.length == maxSkills) {
		maxSkillers.push(key);
	}
});
console.log(`User(s) with max skills: `);
console.log(maxSkillers);

// 2. Count logged in users, count users having greater than equal to 50 points
loggedIn = 0;
highPoints = 0;
Object.keys(usersL2).forEach(key => {
	if(usersL2[key].isLoggedIn) {
		loggedIn++
	}
	if(usersL2[key].points >= 50) {
		highPoints++
	}
});
console.log(`Users logged in: ${loggedIn}`)
console.log(`Users with more than or equal to 50 points: ${highPoints}`)

// 3. Find people who are MERN stack developer from the users object
mernDevs = [];
Object.keys(usersL2).forEach(key => {
	skills = usersL2[key].skills
	if(skills.includes('MongoDB') && skills.includes('Express') && skills.includes('React') && skills.includes('Node')) {
		mernDevs.push(key);
	}
});
console.log(`MERN Dev(s): `);
console.log(mernDevs);

// 4. Set your name in the users object without modifying the original users object
const copyUsers = Object.assign({}, usersL2)
Object.keys(copyUsers).forEach(key => {
	copyUsers[key].name = key
});
console.log(`Original Users:`);
console.log(usersL2);
console.log(`Copy of Original Users:`);
console.log(copyUsers);

// 5. Get all keys or properties of users object
console.log(`All keys:`);
console.log(Object.keys(usersL2))

// 6. Get all the values of users object
console.log(`All values:`);
console.log(Object.values(usersL2))

// 7. Use the countries object to print a country name, capital, populations and languages.


// ////////////////// //
// Exercises: Level 3 //
// ////////////////// //
console.log('- Exercises: Level 3 -')

const usersL3 = [
	{
	  _id: 'ab12ex',
	  username: 'Alex',
	  email: 'alex@alex.com',
	  password: '123123',
	  createdAt: '08/01/2020 9:00 AM',
	  isLoggedIn: false,
	},
	{
	  _id: 'fg12cy',
	  username: 'Asab',
	  email: 'asab@asab.com',
	  password: '123456',
	  createdAt: '08/01/2020 9:30 AM',
	  isLoggedIn: true,
	},
	{
	  _id: 'zwf8md',
	  username: 'Brook',
	  email: 'brook@brook.com',
	  password: '123111',
	  createdAt: '08/01/2020 9:45 AM',
	  isLoggedIn: true,
	},
	{
	  _id: 'eefamr',
	  username: 'Martha',
	  email: 'martha@martha.com',
	  password: '123222',
	  createdAt: '08/01/2020 9:50 AM',
	  isLoggedIn: false,
	},
	{
	  _id: 'ghderc',
	  username: 'Thomas',
	  email: 'thomas@thomas.com',
	  password: '123333',
	  createdAt: '08/01/2020 10:00 AM',
	  isLoggedIn: false,
	},
]

const products = [
	{
	  _id: 'eedfcf',
	  name: 'mobile phone',
	  description: 'Huawei Honor',
	  price: 200,
	  ratings: [
		{ userId: 'fg12cy', rate: 5 },
		{ userId: 'zwf8md', rate: 4.5 },
	  ],
	  likes: [],
	},
	{
	  _id: 'aegfal',
	  name: 'Laptop',
	  description: 'MacPro: System Darwin',
	  price: 2500,
	  ratings: [],
	  likes: ['fg12cy'],
	},
	{
	  _id: 'hedfcg',
	  name: 'TV',
	  description: 'Smart TV:Procaster',
	  price: 400,
	  ratings: [{ userId: 'fg12cy', rate: 5 }],
	  likes: ['fg12cy'],
	},
]

// 1. Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and 
// it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. 
// Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
const personAccount = {
	firstName: 'Sally', 
	lastName: "Brown", 
	incomes: [1500, 100], 
	expenses: [1000, 100, 100, 50, 20],
	totalIncome: function(){
		return this.incomes.reduce((accumulator, currentValue) => {  
			return accumulator + currentValue;
		});
	}, 
	totalExpense: function() {
		return this.expenses.reduce((accumulator, currentValue) => {  
			return accumulator + currentValue;
		});
	}, 
	accountInfo: function() {
		return `Account for ${this.firstName} ${this.lastName}, total expenses: ${this.totalExpense()}, total incomes: ${this.totalIncome()}, balance: ${this.accountBalance()}`
	},
	addIncome: function(newIncome) {
		this.incomes.push(newIncome)
	}, 
	addExpense: function(newExpense) {
		this.expenses.push(newExpense)
	},
	accountBalance: function() {
		return this.totalIncome() - this.totalExpense()
	}
}
console.log(personAccount.accountInfo())

// 2a. Create a function called signUp which allows user to add to the collection. 
// If user exists, inform the user that he has already an account.
function signUp(newUser) {
	if(usersL3.find(element => element._id == newUser._id) === undefined) {
		console.log("Account already exists")
	} else {
		usersL3.push(newUser)
		console.log("Account added")
	}
}

// 2b. Create a function called signIn which allows user to sign in to the application
function signIn(userId) {
	usersL3.forEach((element) => element.isLoggedIn = element._id === userId ? true : element.isLoggedIn )
}
console.log("Sign in")
console.log(usersL3)
signIn('ab12ex')
console.log(usersL3)

// 3. The products array has three elements and each of them has six properties. 
// 3a. Create a function called rateProduct which rates the product 
products.forEach((element) => element.rateProduct = function(newRating){ 
	this.ratings.push(newRating)
} )
console.log(products)

// 3b. Create a function called averageRating which calculate the average rating of a product
products.forEach((element) => element.averageRating = function(){ 
	const rating = 0;
	this.ratings.reduce((prev, curr) => prev + curr, rating);
	return rating/this.ratings.length
} )
console.log(products)

// 4. Create a function called likeProduct. This function will helps to like to the product 
// if it is not liked and remove like if it was liked.



