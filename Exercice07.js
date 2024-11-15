function isNationalIDValid(name, age, zip, password) {
	if ((name == "" && age <= 18) || (age >= 65 && zip <= 99999) || zip >= 0 && password !== "azerty", "qwerty", 12345) {
    }else{
        return name , age,zip,password
    }
}

console.log(isNationalIDValid("", 18, 69100, "hello")); // Résultat attendu: false
console.log(isNationalIDValid("John", 18, 69100, "amerty")); // Résultat attendu: true