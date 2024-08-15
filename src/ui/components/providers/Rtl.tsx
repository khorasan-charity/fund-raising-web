import { PropsWithChildren } from "react";
import { CacheProvider } from "@emotion/react";
import { cacheRtl } from "../../theme";

export const Rtl = ({ children }: PropsWithChildren) => {
	return <CacheProvider value={cacheRtl}>{children}</CacheProvider>;
};
