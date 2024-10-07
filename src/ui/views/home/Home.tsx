import Container from "@mui/material/Container";
import HomeBanner from "@/ui/components/home/Banner";
import Campaigns from "@/ui/components/home/Campaigns";

import useCampaignList from "@/app/services/use-campaign-list";
import useHomeDonation from "@/app/services/use-home-donation";

export default function Home() {
	const { data, error, isPending } = useCampaignList();
	const [count, amount] = useHomeDonation();

	if (error) return <></>;

	const bannerHasError =
		count.isError || !count.data || amount.isError || !amount.data;

	return (
		<>
			{!bannerHasError && (
				<HomeBanner
					count={count.data}
					amount={amount.data}
				/>
			)}
			<Container>
				<Campaigns
					list={data?.items ?? []}
					loading={isPending}
				/>
			</Container>
		</>
	);
}
