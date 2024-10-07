import Container from "@mui/material/Container";
import HomeBanner from "@/ui/components/home/Banner";
import Campaigns from "@/ui/components/home/Campaigns";

import useCampaignList from "@/app/services/use-campaign-list";
import useHomeDonation from "@/app/services/use-home-donation";
import { toman } from "@/app/lib/price";

export default function Home() {
	const { data, error, isPending } = useCampaignList();
	const [count, amount] = useHomeDonation();

	if (error) return <></>;

	const shouldHideBannerText =
		count.isError || !count.data || amount.isError || !amount.data;

	return (
		<>
			<HomeBanner
				count={count.data ?? 0}
				amount={toman(amount.data ?? 0)}
				shouldHideBannerText={shouldHideBannerText}
			/>
			<Container>
				<Campaigns
					list={data?.items ?? []}
					loading={isPending}
				/>
			</Container>
		</>
	);
}
