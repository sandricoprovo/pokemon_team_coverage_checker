export function capitalizeFirstLetter(value: string[]) {
	return value.map((letter, index) => {
		if (index !== 0) return letter;
		return letter.toUpperCase();
	});
}
