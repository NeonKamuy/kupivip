import React from "react";
import { useSelector } from "react-redux";
import { useCategories } from "../../../../controllers/categories/hooks";
import { HeaderSelectors } from "../../../../redux/header/selectors";
import { CategoryListItem } from "./Item";

export const CategoryList: React.FC<{}> = () => {
	const categories = useSelector(HeaderSelectors.getCategoryList);
	
	return (
		<nav className="cats__nav">
			<ul className="cats__list">
				{categories && categories.map(e => <CategoryListItem {...e} />)}
			</ul>
		</nav>
	);
};
