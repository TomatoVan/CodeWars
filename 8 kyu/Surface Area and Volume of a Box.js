const getSize = (width, height, depth) => [
	(depth * width + depth * height + width * height) * 2,
	width * height * depth,
]