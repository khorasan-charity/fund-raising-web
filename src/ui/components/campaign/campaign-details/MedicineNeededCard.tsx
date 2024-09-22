import { IMedicine } from "@/domain";
import styled from "@emotion/styled";
import { Box, Card, Stack, Typography } from "@mui/material";

import drug from "@/assets/images/drug.png";
import Participation from "../participation/Participation";

const fallbackImgUrl = drug;

const MedicineImg = styled.img`
	width: 100%;
`;

interface IRowProps {
	label: string;
	value: string;
}

function Row({ label, value }: IRowProps) {
	return (
		<Stack
			direction="row"
			gap="3px"
			my="6px"
		>
			<Box
				sx={{
					borderStartStartRadius: "9999px",
					borderEndStartRadius: "9999px",
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
				flex={2}
				sx={{
					borderEndEndRadius: "9999px",
					borderStartEndRadius: "9999px",
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

interface IMedicineNeededCardProps {
	medicine: IMedicine;
}

export default function MedicineNeededCard({
	medicine,
}: IMedicineNeededCardProps) {
	const isFull = medicine.percent === 100;
	return (
		<Card>
			<Box position="relative">
				<MedicineImg src={medicine.imgUrl || fallbackImgUrl} />
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
					{medicine.title}
				</Typography>
			</Box>
			<Box
				mx={1}
				my={1}
			>
				<Row
					label="قیمت واحد"
					value={`${medicine.paid} تومان`}
				/>
				<Row
					label="مورد نیاز"
					value={`از ${medicine.total} تومان`}
				/>
			</Box>

			<Box
				mt={3}
				mb={1}
				mx={1}
			>
				<Participation
					percent={medicine.percent}
					fontSize={32}
					color={isFull ? "success" : "secondary"}
				/>
				<Box
					display="inline-block"
					ml="10px"
					sx={{ verticalAlign: "middle" }}
				>
					<Typography
						fontWeight={700}
						fontSize={22}
						color={isFull ? "success.main" : "secondary.main"}
					>
						{medicine.paid / 1e6} میلیون تومان
					</Typography>
					<Typography
						fontWeight={"bold"}
						fontSize={{ xs: 14, sm: 16 }}
					>
						از {medicine.total} میلیون تومان
					</Typography>
				</Box>
			</Box>
		</Card>
	);
}
