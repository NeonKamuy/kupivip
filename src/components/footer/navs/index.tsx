import React from "react";
import { NavItems } from "../constants";
import { NavList } from "./nav-list";

export const FooterNavs: React.FC<{}> = () => {
	return (
		<div className="footer__navs">
			<div className="container container--large">
				<div className="footer__navs-wrapper">
					<NavList
						items={NavItems["Покупателям"]!}
						text="Покупателям"
					/>
					<NavList items={NavItems["Компания"]!} text="Компания" />
					<NavList items={NavItems["Телефоны"]!} text="Телефоны" />
				</div>
			</div>
		</div>
	);
};
