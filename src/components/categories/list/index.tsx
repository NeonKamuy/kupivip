import React from "react";
import { useCategories } from "../../../controllers/categories/hooks";
import { CategoryListItem } from "./Item";

export const CategoryList: React.FC<{}> = () => {
	// Retrieving All Categories
	const categories = useCategories();

	return (
		<nav className="cats__nav">
			<ul className="cats__list">
				{categories && categories.map(e => <CategoryListItem {...e} />)}
			</ul>
		</nav>
	);
};
