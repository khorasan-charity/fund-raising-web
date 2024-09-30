import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CampaignCard from "./CampaignCard";
import { ICampaign } from "@/domain/campaign/ICampaign";
import { fa } from "@/ui/i18n";

interface ICampaignsProps {
	list: ICampaign[];
}

export default function Campaigns({ list }: ICampaignsProps) {
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
				spacing={8}
				py={2}
			>
				{list.map((campaign, index) => (
					<Grid
						item
						xs={12}
						sm={12}
						md={6}
						xl={4}
						key={index}
					>
						<CampaignCard campaign={campaign} />
					</Grid>
				))}
			</Grid>
		</Box>
	);
}
