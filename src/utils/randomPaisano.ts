export function randomPaisano(min: number, max: number) {
	const random = Math.random() * (max - min) + min;
	return random.toFixed(0);
}
