import DateObject from "react-date-object";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

export default function toJalaliFormattedString(
	date: Date,
	format: string = "DD MMMM YYYY",
) {
	const dateObj = new DateObject({
		date,
		format,
	}).convert(persian, persian_fa);
	return dateObj.toString();
}
