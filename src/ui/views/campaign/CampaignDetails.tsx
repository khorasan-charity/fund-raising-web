import styled from "@emotion/styled";
import {
	Box,
	Button,
	Card,
	Container,
	Stack,
	Typography,
} from "@mui/material";

import drSara from "@/assets/images/dr-sara.png";
import Participation from "@/ui/components/campaign/participation/Participation";

const Img = styled.img`
	width: 100%;
	height: 490px;
`;

const Analytics = styled(Card)`
	height: 490px;
	padding: 30px;
	text-align: center;
`;

export default function CampaignDetailsPage() {
	return (
		<Container>
			<Stack
				direction="row"
				mt={1}
				gap={1}
			>
				<Stack
					flex={1}
					// 96px => app header, 8px => mt={1} upper stack
					height="calc(100vh - (96px + 8px))"
					overflow="auto"
				>
					<Img src={drSara} />
					<Typography
						fontWeight={700}
						fontSize={32}
						my={3}
					>
						کمپین تهیه دارو بیاد سرکار خانم دکتر سارا ابراهیمی
					</Typography>
					<Typography
						fontSize={18}
						lineHeight={"32px"}
						textAlign="justify"
					>
						خانم دکتر سارا ابراهیمی در تاریخ ۱۳۶۱/۳/۲۰ در تهران
						متولد شد. پس از پایان تحصیلات متوسطه در رشته شیمی
						دانشگاه شهید بهشتی تهران و رشته داروسازی دانشگاه
						آزاد تهران ادامه تحصیل داد. به جهت علاقه به کار در
						حوزه سلامت، رشته داروسازی را انتخاب و نهایتا با
						مدرک دکترای داروسازی فارغ التحصیل شد. بعد از پایان
						تحصیلات، به لحاظ علاقه به ماندن در ایران و عشق به
						خانواده، در شرکت‌های داروسازی تهران مشغول به کار
						شد. ایشان حدود ۱۶ سال در این زمینه سابقه کار داشته
						است. متاسفانه در تاریخ ۱۴۰۱/۱/۱۰ در شهر سلمان‌شهر
						(متل قو سابق) در یک حادثه‌ی ناگوار و با برخورد یک
						خودرو به ایشان زندگی دنیا را ترک کرد. از نظر
						اطرافیان وی، او شخصیتی مهربان، مسئولیت‌پذیر بخصوص
						در قبال خانواده و اطرافیان، دست و دلباز، آراسته و
						مرتب، پیش‌قدم در کمک و یاری به دیگران در تهیه دارو
						و امور خیر، خالص و بی غل و غش و رها از کینه و کدورت
						و سیاهی‌های دنیا، داشته است. این نرم‌افزار و این
						کمپین بیاد ایشان و با حمایت مالی مادر بزرگوار ایشان
						ساخته شده ست.
					</Typography>
				</Stack>
				<Stack width={400}>
					<Analytics>
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
							<Button
								fullWidth
								size="large"
								color="secondary"
							>
								کمک نقدی
							</Button>
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
				</Stack>
			</Stack>
		</Container>
	);
}
