function calculateAge(birthDate, otherDate) {

	let age = otherDate - birthDate;

	if (age === 1) {
		return 'You are ' + age + ' year old.';
	} else if (age > 1) {
		return 'You are ' + age + ' years old.';
	} else if (age < -1) {
		return 'You will be born in ' + Math.abs(age) + ' years.';
	} else if (age === -1) {
		return 'You will be born in ' + Math.abs(age) + ' year.';
	} else {
		return 'You were born this very year!';
	}
}