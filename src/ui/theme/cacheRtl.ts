import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";

export const cacheRtl = createCache({
	key: "rtl",
	stylisPlugins: [prefixer, rtlPlugin],
});
