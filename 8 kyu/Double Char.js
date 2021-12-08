function doubleChar(str) {
	let newStr = '';
	for (let i = 0; i < str.length; i++) {
		newStr += str.charAt(i) + str.charAt(i);
	}
	return newStr;
};