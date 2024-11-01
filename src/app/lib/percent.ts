export default function getRaisedPercent(total: number, raised: number) {
	const percent = total == 0 ? 100 : (raised * 100) / total;
	return percent >= 100 ? 100 : Number(percent.toFixed(2));
}
