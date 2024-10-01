import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CampaignCard from "./CampaignCard";
import { ICampaign } from "@/domain/campaign/ICampaign";
import { fa } from "@/ui/i18n";
import { PropsWithChildren } from "react";
import Skeleton from "@mui/material/Skeleton";

interface ICampaignsProps {
	list: ICampaign[];
	loading: boolean;
}

const CampaignListGridItem = ({ children }: PropsWithChildren) => (
	<Grid
		item
		xs={12}
		sm={12}
		md={6}
		xl={4}
	>
		{children}
	</Grid>
);

export default function Campaigns({ list, loading }: ICampaignsProps) {
	return (
		<Box my={3}>
			<Typography
				fontSize={{ xs: 23, xl: 40 }}
				textAlign="center"
				mb={4.5}
			>
				{fa.campaign.list.currentCampaigns}
			</Typography>
			<Grid
				container
				spacing={3}
				py={2}
			>
				{loading ? (
					<Loading />
				) : (
					list.map(campaign => (
						<CampaignListGridItem key={campaign.id}>
							<CampaignCard campaign={campaign} />
						</CampaignListGridItem>
					))
				)}
			</Grid>
		</Box>
	);
}

function Loading() {
	return (
		<Grid
			container
			spacing={3}
			py={2}
		>
			{Array.from({ length: 4 }).map((_, index) => (
				<CampaignListGridItem key={index}>
					<Skeleton
						width="100%"
						height={300}
					/>
				</CampaignListGridItem>
			))}
		</Grid>
	);
}
