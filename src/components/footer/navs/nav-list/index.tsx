import React from "react";
import { INavItem, INavList } from "../../constants";
import { NavItem } from "./NavItem";

export const NavList: React.FC<INavList> = (props) => {
	const { items, text } = props;

	return (
		<nav className="footer__nav">
			<h4 className="footer__nav-title">{text}</h4>
			<ul className="footer__nav-list">
				{items.map((e) => (
					<NavItem item={e} />
				))}
			</ul>
		</nav>
	);
};
