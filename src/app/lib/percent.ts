export default function getRaisedPercent(total: number, raised: number) {
	const percent = (raised * 100) / total;
	return percent >= 100 ? 100 : Number(percent.toFixed(2));
}
