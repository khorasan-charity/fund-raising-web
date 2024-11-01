import styled from "@emotion/styled";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Participation from "../campaign/participation/Participation";
import { useNavigate } from "react-router-dom";
import { routes } from "@/router/routes";
import { ICampaign } from "@/domain/campaign/ICampaign";
import { apiBaseUrl } from "@/app/lib/env";

import drug from "@/assets/images/drug.png";
import getRaisedPercent from "@/app/lib/percent";
import { split } from "@/app/lib/price";
import { fa } from "@/ui/i18n";

const fallbackImage = drug;

interface ICampaignCardProps {
	campaign: ICampaign;
}

const CampaignImg = styled.img`
	width: 100%;
`;

export default function CampaignCard({ campaign }: ICampaignCardProps) {
	const navigate = useNavigate();

	function onCardClick() {
		navigate(
			routes.campaignDetails.replace(
				":campaignId",
				String(campaign.id),
			),
		);
	}

	return (
		<Card
			sx={{ cursor: "pointer" }}
			elevation={4}
			onClick={onCardClick}
		>
			<CampaignImg
				src={
					campaign.thumbnailImageFileId
						? `${apiBaseUrl}/file/download/${campaign.thumbnailImageFileId}`
						: fallbackImage
				}
			/>
			<Box
				px={2}
				mt={1}
			>
				<Typography
					component="h2"
					fontSize={18}
					fontWeight="bold"
				>
					{campaign.title}
				</Typography>
			</Box>
			<Box
				px={2}
				mt={3}
				pb={2}
			>
				<Participation
					percent={getRaisedPercent(
						campaign.targetAmount,
						campaign.raisedAmount,
					)}
				/>
				<Box
					display="inline-block"
					ml="10px"
					sx={{ verticalAlign: "middle" }}
				>
					<Typography
						fontWeight={700}
						fontSize={22}
						color="secondary"
					>
						{split(campaign.raisedAmount)}{" "}
						{fa.common.price.rial}
					</Typography>
					<Typography
						fontWeight={"bold"}
						fontSize={{ xs: 14, sm: 16 }}
					>
						توسط {campaign.raiseCount} حامی جمع آوری شده است.
					</Typography>
				</Box>
			</Box>
		</Card>
	);
}
