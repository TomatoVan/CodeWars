function areYouPlayingBanjo(name) {
	if (name.toLowerCase().charAt(0) == 'r') {
		name = name + ' plays banjo';
	} else {
		name = name + ' does not play banjo';
	}
	return name;
}