function isEnoughMoney(price, wallet) {
	if (price < wallet) {
		console.log(true);
	} else console.log(false);
}

console.log(isEnoughMoney(10, 0)); // Résultat attendu: false
console.log(isEnoughMoney(5, 25)); // Résultat attendu: true
