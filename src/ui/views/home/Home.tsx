import { ICampaign } from "@/domain/medicine/Campaign";
import Container from "@mui/material/Container";
import HomeBanner from "@/ui/components/home/Banner";
import Campaigns from "@/ui/components/home/Campaigns";

import drug from "@/assets/images/drug.png";
import radiology from "@/assets/images/radiology.png";
import radiotherapy from "@/assets/images/radiotherapy.png";

const campaigns: ICampaign[] = [
	{
		title: "تهیه دارو برای کودکان (یادبود دکتر سارا ابراهیمی)",
		collected: 250_000_000,
		imgUrl: drug,
		peopleCount: 459,
		percent: 57,
	},
	{
		title: "تصویربرداری",
		collected: 37_000_000,
		imgUrl: radiology,
		peopleCount: 59,
		percent: 25,
	},
	{
		title: "رادیوتراپی",
		collected: 180_000_000,
		imgUrl: radiotherapy,
		peopleCount: 313,
		percent: 90,
	},
];

export default function Home() {
	return (
		<>
			<HomeBanner />
			<Container>
				<Campaigns list={campaigns} />
			</Container>
		</>
	);
}
