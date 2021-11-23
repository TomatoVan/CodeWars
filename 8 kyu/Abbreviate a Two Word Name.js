function abbrevName(name) {
	[first, last] = name.toUpperCase().split(' ');
	return first[0] + '.' + last[0];
}