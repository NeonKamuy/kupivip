import React from "react";
import { IServiceItem } from "../constants";

export const ServiceItem: React.FC<IServiceItem> = (props) => {
	const { description, img, text } = props;

	return (
		<a href="#" className="services__item">
			<header className="services__item-header">
				<figure className="services__item-image">
					<img src={img} alt="" />
				</figure>
				<h3 className="services__item-title">{text}</h3>
			</header>
			<article className="services__item-description">
				{description}
			</article>
		</a>
	);
};
