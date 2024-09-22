import { ICampaign } from "@/domain/medicine/Campaign";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CampaignCard from "./CampaignCard";

interface ICampaignsProps {
	list: ICampaign[];
}

export default function Campaigns({ list }: ICampaignsProps) {
	return (
		<Box my={3}>
			<Typography
				fontSize={45}
				textAlign="center"
				mb={4.5}
			>
				کمپین‌های جاری
			</Typography>
			<Grid
				container
				spacing={8}
			>
				{list.map((campaign, index) => (
					<Grid
						item
						xs={4}
					>
						<CampaignCard
							key={index}
							campaign={campaign}
						/>
					</Grid>
				))}
			</Grid>
		</Box>
	);
}
