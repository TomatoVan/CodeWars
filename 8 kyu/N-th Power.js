function index(array, n) {
	//your code here
	if (array.length <= n || 0 > n) {
		return -1;
	} else {
		return Math.pow(array[n], n);
	}
}