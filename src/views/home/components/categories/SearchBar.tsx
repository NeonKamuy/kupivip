import React from "react";

export const CategoriesSearchBar: React.FC<{}> = () => {
	return (
		<div className="searchbar">
			<form action="">
				<input type="text" placeholder="Поиск товаров и брендов" />
				<button className="searchbar__btn">
					<svg id="icon-search" viewBox="0 0 20 20">
						<path
							d="M16.48 9.18c0-4.02-3.24-7.28-7.24-7.28S2 5.16 2 9.18c0 4.02 3.24 7.28 7.24 7.28s7.24-3.26 7.24-7.28zm-2.43 5.02l4.78 4.5-4.78-4.5z"
							fill="none"
							fill-rule="evenodd"
						/>
					</svg>
				</button>
			</form>
		</div>
	);
};
