// Code Question 1

/* const hamburger = { name: "Cheese Burger", weight: 250 };
const secondBurger = hamburger;
secondBurger.name = 'Double Cheese Burger';
secondBurger.weight = 500;

console.log(hamburger.name); // Double Cheese Burger
console.log(secondBurger.name ); // Double Cheese Burger */

// Senza lanciare il codice, riesci a prevedere cosa viene stampato in console? Double Cheese Burger
// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice? Uno

// Code Question 2

/* const hamburger = { 
	name: "Cheese Burger", 
	weight: 250,
	ingredients: ["Cheese", "Meat", "Bread", "Tomato"]
};

const secondBurger = {...hamburger};
secondBurger.ingredients[0] = "Salad";

console.log(hamburger.ingredients[0]); // Salad
console.log(secondBurger.ingredients[0]); // Salad */

// Senza lanciare il codice, riesci a prevedere cosa viene stampato in console? Salad
// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice? Due

// Code Question 3

/* const hamburger = { 
	name: "Cheese Burger", 
	weight: 250,
	maker: {
		name: "Anonymous Chef",
		restaurant: {
			name: "Hyur's Burgers",
			address: "Main Street, 123",
			isOpen: true,
		},
		age: 29
	}
};

const secondBurger = structuredClone(hamburger);
const thirdBurger = structuredClone(hamburger); */

// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice? Nove

// Code Question 4

/* const chef = {
	name: "Chef Hyur",
	age: 29,
	makeBurger: (num = 1) => {
		console.log(`Ecco ${num} hamburger per te!`);
	},
}

const restaurant = {
	name: "Hyur's Burgers",
	address: {
		street: 'Main Street',
		number: 123,
	},
	openingDate: new Date(2025, 3, 11),
	isOpen: false,
}; */

// Qual è il metodo migliore per clonare l’oggetto chef, e perché? spread operator {...chef}
// perché? è un oggetto non annidato ed ha una funzione

// Qual è il metodo migliore per clonare l’oggetto restaurant, e perché? structuredClone(restaurant)
// perché? ha oggetti annidati
