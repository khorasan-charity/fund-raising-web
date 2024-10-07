import request from "../../base/request";

export default function getDonationAmount(): Promise<number> {
	return request.get("/donation/amount");
}
