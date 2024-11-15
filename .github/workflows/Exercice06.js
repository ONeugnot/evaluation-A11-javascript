function getReduction(price, age) {
	if (age <= 5) {
		prix = "0";
	} else if (age <= 30) {
		prix = "45";
	}
}

console.log(getReduction(10, 5)); // Résultat attendu: 0
console.log(getReduction(150, 25)); // Résultat attendu: 45
