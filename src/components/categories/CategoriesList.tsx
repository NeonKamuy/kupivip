import React from "react";

export const CategoriesList: React.FC<{}> = () => {
	return (
		<nav className="cats__nav">
			<ul className="cats__list">
				<li className="cats__item">
					<a href="#" className="cats__link">
						Category 1
					</a>
				</li>
				<li className="cats__item">
					<a href="#" className="cats__link">
						Category 2
					</a>
				</li>
				<li className="cats__item">
					<a href="#" className="cats__link">
						Category 3
					</a>
				</li>
			</ul>
		</nav>
	);
};
