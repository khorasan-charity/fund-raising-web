import styled from "@emotion/styled";
import { Box, Card, Stack, Typography } from "@mui/material";
import Participation from "../participation/Participation";
import getRaisedPercent from "@/app/lib/percent";
import getImageSource from "@/app/lib/get-image-source";
import { fa } from "@/ui/i18n";
import { ICampaignItem } from "@/domain/campaign/ICampaignItem";
import { split } from "@/app/lib/price";

import medicine from "@/assets/images/placeholder-image.webp";

const CampaignItemImg = styled.img`
	width: 100%;
	aspect-ratio: 3/2;
`;

interface IRowProps {
	label: string;
	value: string;
}

function Row({ label, value }: IRowProps) {
	const borderRadius = "9999px";
	return (
		<Stack
			direction="row"
			gap="3px"
			my="6px"
		>
			<Box
				sx={{
					borderStartStartRadius: borderRadius,
					borderEndStartRadius: borderRadius,
				}}
				flex={1}
				bgcolor="grey.200"
				p={0.5}
				boxSizing="border-box"
			>
				<Typography px={1}>{label}</Typography>
			</Box>
			<Box
				bgcolor="grey.200"
				p={0.5}
				flex={1.5}
				sx={{
					borderEndEndRadius: borderRadius,
					borderStartEndRadius: borderRadius,
				}}
			>
				<Typography
					textAlign="end"
					px={1}
				>
					{value}
				</Typography>
			</Box>
		</Stack>
	);
}

interface ICampaignItemCardProps {
	item: ICampaignItem;
}

export default function CampaignItemCard({
	item,
}: ICampaignItemCardProps) {
	const percent = getRaisedPercent(item.targetAmount, item.raisedAmount);
	const isFull = percent === 100;
	return (
		<Card
			elevation={2}
			sx={{
				display: "flex",
				flexDirection: "column",
				height: "100%",
			}}
		>
			<Box position="relative">
				<CampaignItemImg
					src={getImageSource(item.imageFileId)}
					onError={e => {
						const img = e.target as HTMLImageElement;
						img.src = medicine;
					}}
				/>
				<Typography
					position="absolute"
					color="white"
					width="100%"
					textAlign="center"
					fontSize={22}
					left={0}
					bottom={0}
					sx={{
						bgcolor: "rgba(0, 0, 0, 0.5)",
					}}
					py={2}
				>
					{item.title}
				</Typography>
			</Box>
			<Box
				mx={1}
				my={1}
			>
				{item.attributes.map(attr => (
					<Row
						key={attr.id}
						label={attr.title}
						value={`${attr.valueType === "money" ? split(Number(attr.value)) : attr.value} ${attr.valueTypeTitle}`}
					/>
				))}
			</Box>

			<Box
				mt="auto"
				mb={1}
				mx={1}
			>
				<Participation
					percent={percent}
					color={isFull ? "success" : "secondary"}
				/>
				<Box
					display="inline-block"
					ml="10px"
					sx={{ verticalAlign: "middle" }}
				>
					<Typography
						fontWeight={700}
						fontSize={19}
						color={isFull ? "success.main" : "secondary.main"}
					>
						{split(item.raisedAmount)} {fa.common.price.rial}
					</Typography>
					<Typography
						fontWeight={"bold"}
						fontSize={{ xs: 14, sm: 16 }}
					>
						{fa.common.from} {split(item.targetAmount)}{" "}
						{fa.common.price.rial}
					</Typography>
				</Box>
			</Box>
		</Card>
	);
}
