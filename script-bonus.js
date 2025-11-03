// Code Question 5 (Bonus)

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

const newRestaurant = {...hamburger.maker.restaurant};
newRestaurant.name = "Hyur's II";
newRestaurant.address = "Second Street, 12";
const secondBurger = {...hamburger};
secondBurger.maker.restaurant = newRestaurant;
secondBurger.maker.name = "Chef Hyur";

console.log(hamburger.maker.name); // Chef Hyur
console.log(secondBurger.maker.name); // Chef Hyur
console.log(hamburger.maker.restaurant.name); // Hyur's Burgers
console.log(secondBurger.maker.restaurant.name); // Hyur's II */

// Senza lanciare il codice, riesci a prevedere cosa viene stampato in console? (Vedi sopra)
// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice? 5

// Code Question 6 (Bonus)

/* const chef = {
	name: "Chef Hyur",
	age: 29,
	makeBurger: (num = 1) => {
		console.log(`Ecco ${num} hamburger per te!`);
	},
	restaurant: {
		name: "Hyur's Burgers",
		welcomeClient: () => {
			console.log("Benvenuto!");
		},
		address: {
			street: 'Main Street',
			number: 123,
			showAddress: () => {
				console.log("Main Street 123");
			}
		},
		isOpen: true,
	}
} */

// Qual è il metodo migliore per clonare l’oggetto chef, e perché? spread ricorsivo per non perdere niente

// Snack (Bonus)

/* Crea una funzione che permette la copia profonda (deep copy) di un oggetto, che copia anche i suoi metodi (proprietà che contengono funzioni). Usa l’oggetto di Code Question 6 come test.

⚠️ Serve usare una funzione ricorsiva! (fai un po’ di ricerca). */

function deepCloneWithMethods(obj) {
  if (obj === null || typeof obj !== "object") return obj;
  if (typeof obj === "function") return obj;

  if (Array.isArray(obj)) {
    return obj.map((item) => deepCloneWithMethods(item));
  }

  const cloned = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloned[key] = deepCloneWithMethods(obj[key]);
    }
  }

  return cloned;
}

const chef = {
  name: "Chef Hyur",
  age: 29,
  makeBurger: (num = 1) => {
    console.log(`Ecco ${num} hamburger per te!`);
  },
  restaurant: {
    name: "Hyur's Burgers",
    welcomeClient: () => {
      console.log("Benvenuto!");
    },
    address: {
      street: "Main Street",
      number: 123,
      showAddress: () => {
        console.log("Main Street 123");
      },
    },
    isOpen: true,
  },
};

const clonedChef = deepCloneWithMethods(chef);

clonedChef.makeBurger(2);
clonedChef.restaurant.welcomeClient();
clonedChef.restaurant.address.showAddress();
