const tripleTrouble = (one, two, three) => {
	return one
			.split('')
			.reduce((total, _, i) => `${total}${one[i]}${two[i]}${three[i]}`, '')
}