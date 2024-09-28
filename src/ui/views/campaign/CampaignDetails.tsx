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

import drSara from "@/assets/images/dr-sara.png";
import drug from "@/assets/images/drug.png";

import Participation from "@/ui/components/campaign/participation/Participation";
import CampaignItems from "@/ui/components/campaign/campaign-details/CampaignItems";
import { ICampaignItem } from "@/domain";
import { Link, useParams } from "react-router-dom";
import { routes } from "@/router/routes";
import { searchParams } from "@/router/search-params";
import { deepPurple } from "@mui/material/colors";
import { IDonation } from "@/domain/medicine/Donation";

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

const campaignItems: ICampaignItem[] = [
	{
		id: Number(Math.random().toFixed(3)),
		imgUrl: drug,
		paid: 66_880_000,
		title: "قرص مرکاپتوپورین 50",
		total: 220,
		unit: 304_000,
		percent: 100,
	},
	{
		id: Number(Math.random().toFixed(3)),
		imgUrl: drug,
		paid: 66_880_000,
		title: "قرص مرکاپتوپورین 50",
		total: 220,
		unit: 304_000,
		percent: 100,
	},
	{
		id: Number(Math.random().toFixed(3)),
		imgUrl: drug,
		paid: 66_880_000,
		title: "قرص مرکاپتوپورین 50",
		total: 220,
		unit: 304_000,
		percent: 100,
	},
	{
		id: Number(Math.random().toFixed(3)),
		imgUrl: drug,
		paid: 66_880_000,
		title: "قرص مرکاپتوپورین 50",
		total: 220,
		unit: 304_000,
		percent: 67,
	},
	{
		id: Number(Math.random().toFixed(3)),
		imgUrl: drug,
		paid: 66_880_000,
		title: "قرص مرکاپتوپورین 50",
		total: 220,
		unit: 304_000,
		percent: 0,
	},
	{
		id: Number(Math.random().toFixed(3)),
		imgUrl: drug,
		paid: 66_880_000,
		title: "قرص مرکاپتوپورین 50",
		total: 220,
		unit: 304_000,
		percent: 0,
	},
];

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
					<Img src={drSara} />
					<Typography
						fontWeight={700}
						fontSize={32}
						my={3}
					>
						کمپین تهیه دارو (دکتر سارا ابراهیمی)
					</Typography>
					<Typography
						fontSize={18}
						lineHeight={"32px"}
						textAlign="justify"
						px={1}
					>
						دکتر سارا ابراهیمی در تاریخ ۱۳۶۱/۳/۲۰ در تهران
						متولد شد. پس از پایان تحصیلات متوسطه در رشته شیمی
						دانشگاه شهید بهشتی تهران و رشته داروسازی دانشگاه
						آزاد تهران ادامه تحصیل داد. به جهت علاقه به کار در
						حوزه سلامت، رشته داروسازی را انتخاب و نهایتا با
						مدرک دکترای داروسازی فارغ التحصیل شد. بعد از پایان
						تحصیلات، به دلیل علاقه به کشور و خانواده‌اش در
						ایران ماند و در شرکت‌های داروسازی تهران مشغول به
						کار شد. ایشان حدود ۱۶ سال در این زمینه فعالیت کرد.
						متاسفانه در تاریخ ۱۴۰۱/۱/۱۰ در شهر سلمان‌شهر (متل
						قو سابق) در یک حادثه‌ی ناگوار و با برخورد یک خودرو
						به ایشان زندگی دنیا را ترک کرد. از ویژگی‌های شخصیتی
						بارز ایشان می‌توان به مهربانی، مسئولیت‌پذیری (بخصوص
						در قبال خانواده و اطرافیان)، آراستگی و مرتب بودن،
						پیش‌قدم در کمک و یاری به دیگران در تهیه دارو و امور
						خیر، خالص و بی غل و غش، رها از کینه، کدورت و
						سیاهی‌های دنیا اشاره کرد.
						<br />
						<br />
						این نرم‌افزار و این کمپین بیاد ایشان و با حمایت
						مالی مادر بزرگوار ایشان ساخته شده ست.
					</Typography>

					<CampaignItems items={campaignItems} />
				</Stack>
				<Stack
					width={{ xs: "100%", lg: 400 }}
					order={{ xs: 1, lg: 1 }}
				>
					<Analytics elevation={3}>
						<Box mt={5.5}>
							<Participation
								size={133}
								percent={57}
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
							۲۵۰ میلیون تومان
						</Typography>
						<Typography mt="6px">
							از{" "}
							<Typography
								component="span"
								color="secondary.main"
								lineHeight="24px"
							>
								۴۳۸ میلیون تومان
							</Typography>{" "}
							مبلغ مورد نظر
						</Typography>
						<Typography>
							توسط{" "}
							<Typography
								component="span"
								color="success.light"
								lineHeight="24px"
							>
								۴۵۹ حامی
							</Typography>{" "}
							تامین شده است.
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
									کمک نقدی
								</Button>
							</Link>
							<Button
								fullWidth
								size="large"
								sx={{ mt: "10px" }}
								color="inherit"
								variant="outlined"
							>
								اشتراک گذاری
							</Button>
						</Box>
					</Analytics>
					<Stack height="370px">
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
								حامیان
							</Typography>
							<Typography
								fontSize={25}
								fontWeight={700}
							>
								۴۵۹ نفر
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
