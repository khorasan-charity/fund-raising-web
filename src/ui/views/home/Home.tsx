import Container from "@mui/material/Container";
import HomeBanner from "@/ui/components/home/Banner";
import Campaigns from "@/ui/components/home/Campaigns";

import useCampaignList from "@/app/services/use-campaign-list";

export default function Home() {
	const { data, error, isPending } = useCampaignList();

	if (error) return <></>;

	return (
		<>
			<HomeBanner />
			<Container>
				<Campaigns
					list={data?.items ?? []}
					loading={isPending}
				/>
			</Container>
		</>
	);
}
