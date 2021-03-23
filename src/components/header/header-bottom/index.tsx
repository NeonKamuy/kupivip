import React from "react";
import { HeaderBottomMain } from "./Main";
import { HeaderBottomMobile } from "./Mobile";

export const HeaderBottom: React.FC<{}> = () => {
	return (
		<div className="header__bottom container container--large">
			<HeaderBottomMobile />
			<HeaderBottomMain />
		</div>
	);
};
