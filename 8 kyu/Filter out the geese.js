const gooseFilter = (birds) => {
	const geese = new Set(['African', 'Roman Tufted', 'Toulouse', 'Pilgrim', 'Steinbacher'])

	return birds.filter((bird) => !geese.has(bird))
}