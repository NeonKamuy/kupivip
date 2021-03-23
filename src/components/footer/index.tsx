import React from "react";
import { INavItem, NavItems } from "./constants";
import { FooterHeader } from "./header";
import { FooterNavs } from "./navs";
import { NavList } from "./navs/nav-list";
import { FooterPayments } from "./payments";

export const Footer: React.FC<{}> = () => {
	return (
		<footer className="footer">
			<FooterHeader />
			<FooterNavs />
			<FooterPayments />
			<div className="footer__copyright">© 2021 ООО Copyright Text</div>
		</footer>
	);
};

