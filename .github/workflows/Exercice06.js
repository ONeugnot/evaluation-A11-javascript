function getReduction(price, age) {
	if (age <= 5) {
		price = "0";
	} else if (age <= 30) {
		price = "45";
	}
}

console.log(getReduction(10, 5)); // Résultat attendu: 0
console.log(getReduction(150, 25)); // Résultat attendu: 45
