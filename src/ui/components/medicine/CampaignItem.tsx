import { CampaignItemDao } from "@/domain";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import { Typography } from "@mui/material";
import { fa } from "@/ui/i18n";
import { split } from "@/app/utils/price";

const Data = ({ title, data }: { title: string; data: string }) => {
	return (
		<Typography variant="caption">
			<strong>{title}: </strong>
			<span>{data}</span>
		</Typography>
	);
};

export const CampaignItem = (props: CampaignItemDao) => {
	return (
		<Card sx={{ p: 2 }}>
			<Stack gap={2}>
				<Stack
					direction="row"
					alignItems="center"
					gap={2}
				>
					<Avatar
						src={props.imgUrl}
						alt={props.title}
					/>
					<Typography fontWeight="bold">
						{props.title}
					</Typography>
				</Stack>
				<Stack>
					<Stack>
						<Data
							title={fa.medicine_item.unitPriceLbl}
							data={`${split(props.unitPrice)}
								${fa.common.price.toman}`}
						/>
						<Data
							title={fa.medicine_item.neededLbl}
							data={`${split(props.total * props.unitPrice)}
								${fa.common.price.toman}`}
						/>
						<Data
							title={fa.medicine_item.collectedLbl}
							data={`${split(props.paidAmount)}
								${fa.common.price.toman}`}
						/>
						<Data
							title={fa.medicine_item.remainingLbl}
							data={`${split(props.total * props.unitPrice - props.paidAmount)}
								${fa.common.price.toman}`}
						/>
					</Stack>
				</Stack>
			</Stack>
		</Card>
	);
};
