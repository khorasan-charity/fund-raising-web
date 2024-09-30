export default function getRaisedPercent(total: number, raised: number) {
	const percent = Math.round((raised * 100) / total);
	return percent >= 100 ? 100 : percent;
}
