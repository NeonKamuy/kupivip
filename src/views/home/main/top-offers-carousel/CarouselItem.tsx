import React from "react";
import { IListItem } from "../constants";

export const CarouselItem: React.FC<IListItem> = (props) => {
	const { img, text } = props;

	return (
		<div className="top-offers__item">
			<a href="#">
				<figure className="top-offers__image">
					<img src={img} alt="" />
				</figure>
				<h3 className="top-offers__item-title">{text}</h3>
			</a>
		</div>
	);
};
