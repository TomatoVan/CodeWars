const array = array_ =>
		array_
				.split(',')
				.slice(1, -1)
				.join(' ') || null