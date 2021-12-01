function rentalCarCost(d) {
	let day = d >= 3 && d < 7 ? 20 : 0,
			week = d >= 7 ? 50 : 0;

	return (d * 40) - day - week;
}