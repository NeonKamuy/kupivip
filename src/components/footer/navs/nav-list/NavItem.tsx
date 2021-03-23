import React from "react";
import { INavItem } from "../../constants";

export const NavItem: React.FC<{ item: INavItem }> = (props) => {
	const {
		item: { text, phone },
	} = props;
	return (
		<li className="footer__nav-item">
			<a href={phone ? `tel:${phone}` : "#"} className="footer__nav-link">
				{text}
				{phone && (
					<span className="footer__nav-phone">8-800-100-44-99</span>
				)}
			</a>
		</li>
	);
};
