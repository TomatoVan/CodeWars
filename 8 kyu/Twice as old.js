function twiceAsOld(dadYearsOld, sonYearsOld) {
	let twice = dadYearsOld - sonYearsOld * 2;
	return twice < 0 ? twice * (-1) : twice;
}