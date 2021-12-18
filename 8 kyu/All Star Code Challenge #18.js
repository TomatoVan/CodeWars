function strCount(str, letter) {
	//code here
	return str.split('').filter((x) => letter === x).length;
}