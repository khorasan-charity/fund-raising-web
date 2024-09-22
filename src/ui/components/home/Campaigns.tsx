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
				fontSize={{ xs: 28, xl: 45 }}
				textAlign="center"
				mb={4.5}
			>
				کمپین‌های جاری
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
