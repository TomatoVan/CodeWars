const correct = string =>
		string
				.split('')
				.map(char => {
					const corrections = {'0': 'O', '5': 'S', '1': 'I'}
					return corrections[char] || char
				})
				.join('')