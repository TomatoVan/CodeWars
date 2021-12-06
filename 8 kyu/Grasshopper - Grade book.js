function getGrade(s1, s2, s3) {
	let i = Math.floor((s1 + s2 + s3) / getGrade.length)
	console.log(i)
	if (i >= 90 && i <= 100) {
		return 'A'
	} else if (i >= 80 && i <= 89) {
		return 'B'
	} else if (i >= 70 && i <= 79) {
		return 'C'
	} else if (i >= 60 && i <= 69) {
		return 'D'
	} else {
		return 'F'
	}
}