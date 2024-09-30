import styled from "@emotion/styled";
import {
	Avatar,
	Box,
	Button,
	Card,
	Container,
	Divider,
	Stack,
	Typography,
} from "@mui/material";

import Participation from "@/ui/components/campaign/participation/Participation";
import CampaignItems from "@/ui/components/campaign/campaign-details/CampaignItems";
import { Link, useParams } from "react-router-dom";
import { routes } from "@/router/routes";
import { searchParams } from "@/router/search-params";
import { deepPurple } from "@mui/material/colors";
import { IDonation } from "@/domain/medicine/Donation";
import useCampaignDetails from "@/app/services/use-campaign-details";
import getRaisedPercent from "@/app/lib/percent";
import { fa } from "@/ui/i18n";
import getImageSource from "@/app/lib/get-image-source";
import useCampaignItems from "@/app/services/use-campaign-items";

const Img = styled.img`
	width: 100%;
	max-height: 490px;
	height: 100%;
`;

const Analytics = styled(Card)`
	height: 490px;
	padding: 30px;
	text-align: center;
`;

const donations: IDonation[] = [
	{
		id: Number(Math.random().toFixed(3)),
		name: "محمد",
		message: "به امید سلامتی همه کودکان",
		amount: "۵ میلیون تومان",
		time: "۳ ساعت پیش",
	},
	{
		id: Number(Math.random().toFixed(3)),
		name: "ناشناس",
		message: null,
		amount: "۱۰۰ هزار تومان",
		time: "۵ ساعت پیش",
	},
	{
		id: Number(Math.random().toFixed(3)),
		name: "ناشناس",
		message: "ان شالله همه زود خوب بشن",
		amount: "۱ میلیون تومان",
		time: "۱ روز پیش",
	},
	{
		id: Number(Math.random().toFixed(3)),
		name: "زهرا",
		message: "بیاد سارا خانم",
		amount: "۳ میلیون تومان",
		time: "۱ روز پیش",
	},
	{
		id: Number(Math.random().toFixed(3)),
		name: "الهام",
		message: null,
		amount: "۳۰۰ هزار تومان",
		time: "۲ روز پیش",
	},
	{
		id: Number(Math.random().toFixed(3)),
		name: "ناشناس",
		message: null,
		amount: "۱ میلیون تومان",
		time: "۲ روز پیش",
	},
	{
		id: Number(Math.random().toFixed(3)),
		name: "نازنین",
		message: null,
		amount: "۵ میلیون تومان",
		time: "۳ روز پیش",
	},
];

interface ISupportItemProps {
	donation: IDonation;
}

function SupportItem({ donation }: ISupportItemProps) {
	return (
		<Stack
			direction="row"
			justifyContent="space-between"
		>
			<Stack
				direction="row"
				alignItems="center"
			>
				<Avatar sx={{ bgcolor: deepPurple[200] }} />
				<Stack
					spacing={1}
					alignItems="start"
					justifyContent="space-around"
					height="100%"
					ml={1}
				>
					<Typography
						fontWeight="bold"
						fontSize={20}
					>
						{donation.name}
					</Typography>
					{donation.message && (
						<Typography
							fontSize={12}
							color="gray"
						>
							{donation.message}
						</Typography>
					)}
				</Stack>
			</Stack>
			<Stack
				spacing={1}
				alignItems="end"
				justifyContent="space-around"
			>
				<Typography
					color="secondary"
					fontWeight={700}
					fontSize={16}
				>
					{donation.amount}
				</Typography>
				<Typography
					fontSize={12}
					color="gray"
				>
					{donation.time}
				</Typography>
			</Stack>
		</Stack>
	);
}

export default function CampaignDetailsPage() {
	const { campaignId } = useParams();
	const { data, error } = useCampaignDetails(Number(campaignId));
	const { data: campaignItems, error: campaignItemsError } =
		useCampaignItems(Number(campaignId));

	if (error || !data) return <></>;

	return (
		<Container>
			<Stack
				direction={{ xs: "column", lg: "row" }}
				mt={1}
				gap={1}
			>
				<Stack
					flex={1}
					// 96px => app header, 8px => mt={1} upper stack
					height="calc(100vh - (96px + 8px))"
					overflow="auto"
					order={{ xs: 2, lg: 1 }}
					p={1}
				>
					<Img src={getImageSource(data.coverImageFileId)} />
					<Typography
						fontWeight={700}
						fontSize={32}
						my={3}
					>
						{data.title}
					</Typography>
					<Typography
						fontSize={18}
						lineHeight={"32px"}
						textAlign="justify"
						px={1}
					>
						{data.description}
					</Typography>

					{campaignItems && !campaignItemsError && (
						<CampaignItems items={campaignItems} />
					)}
				</Stack>
				<Stack
					width={{ xs: "100%", lg: 400 }}
					order={{ xs: 1, lg: 1 }}
					display={{ xs: "contents", lg: "flex" }}
				>
					<Analytics elevation={3}>
						<Box mt={5.5}>
							<Participation
								size={133}
								percent={getRaisedPercent(
									data.targetAmount,
									data.raisedAmount,
								)}
								fontSize={48}
								percentFontSize={22}
							/>
						</Box>
						<Typography
							color="secondary.main"
							fontSize={32}
							fontWeight={700}
							mt="51px"
						>
							{data.raisedAmount / 1e6}{" "}
							{fa.common.price.millionToman}
						</Typography>
						<Typography mt="6px">
							{fa.common.from}{" "}
							<Typography
								component="span"
								color="secondary.main"
								lineHeight="24px"
							>
								{data.targetAmount / 1e6}{" "}
								{fa.common.price.millionToman}
							</Typography>{" "}
							{fa.common.price.targetAmount}
						</Typography>
						<Typography>
							{fa.common.by}{" "}
							<Typography
								component="span"
								color="success.light"
								lineHeight="24px"
							>
								{data.raiseCount} {fa.common.supporter}
							</Typography>{" "}
							{fa.common.supplied}.
						</Typography>
						<Box mt="21px">
							<Link
								to={`${routes.payment}?${searchParams.campaignId}=${campaignId}`}
							>
								<Button
									fullWidth
									size="large"
									color="secondary"
								>
									{fa.common.cashDonate}
								</Button>
							</Link>
							<Button
								fullWidth
								size="large"
								sx={{ mt: "10px" }}
								color="inherit"
								variant="outlined"
							>
								{fa.common.share}
							</Button>
						</Box>
					</Analytics>
					<Stack
						height="370px"
						order={4}
						pb={2}
					>
						<Stack
							direction="row"
							alignItems="center"
							justifyContent="space-between"
							p={2}
						>
							<Typography
								fontSize={25}
								fontWeight={700}
							>
								{fa.common.supporters}
							</Typography>
							<Typography
								fontSize={25}
								fontWeight={700}
							>
								{data.raiseCount} {fa.common.count}
							</Typography>
						</Stack>
						<Stack
							flexGrow={1}
							overflow="auto"
							divider={
								<Divider
									orientation="horizontal"
									flexItem
								/>
							}
							spacing={2}
							p={2}
						>
							{donations.map(donation => (
								<SupportItem
									donation={donation}
									key={donation.name}
								/>
							))}
						</Stack>
					</Stack>
				</Stack>
			</Stack>
		</Container>
	);
}
