import React from "react";
import { INavItem } from "../constants";
import { NavItem } from "./NavItem";

export const NavList: React.FC<{ items: INavItem[] }> = (props) => {
	const { items } = props;

	return (
		<ul className="footer__nav-list">
			{items.map((e) => (
				<NavItem item={e} />
			))}
		</ul>
	);
};
