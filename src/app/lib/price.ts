function splitStringFromEnd(
	customString: string,
	every: number,
): string[] {
	const result = [];
	let idx = customString.length - 1;

	while (idx >= every) {
		const piece = customString.slice(idx - (every - 1), idx + 1);
		result.unshift(piece);
		idx -= every;
	}

	result.unshift(customString.slice(0, idx + 1));

	return result;
}

export function split(value: number): string {
	const float = value % 10;
	const every = 3;

	const result = splitStringFromEnd(value.toString(), every);

	return result.join("٬") + (float ? `.${float}` : "");
}

export function toman(rial: number) {
	return Math.ceil(rial / 10);
}
