import { Box, Grid, Typography } from "@mui/material";
import CampaignItemCard from "./CampaignItemCard";
import { ICampaignItem } from "@/domain/campaign/ICampaignItem";

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
				نیازمندی‌ها
			</Typography>
			<Grid
				container
				spacing={3}
				mt={1}
				mb={2}
				px={1}
			>
				{items.map(item => (
					<Grid
						item
						xs={12}
						md={6}
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
