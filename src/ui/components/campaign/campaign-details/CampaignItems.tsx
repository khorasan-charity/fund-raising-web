import { ICampaignItem } from "@/domain";
import { Box, Grid, Typography } from "@mui/material";
import CampaignItemCard from "./CampaignItemCard";

interface ICampaignItemsProps {
	items: ICampaignItem[];
}

export default function CampaignItems({ items }: ICampaignItemsProps) {
	return (
		<Box mt={4}>
			<Typography
				component="h1"
				fontSize={32}
				fontWeight={700}
			>
				موارد مورد نیاز
			</Typography>
			<Grid
				container
				spacing={3}
				mt={4}
				mb={2}
				px={1}
			>
				{items.map(item => (
					<Grid
						item
						xs={12}
						md={12}
						xl={6}
						xxl={4}
						key={item.id}
					>
						<CampaignItemCard item={item} />
					</Grid>
				))}
			</Grid>
		</Box>
	);
}
