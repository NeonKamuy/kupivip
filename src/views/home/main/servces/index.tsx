import React from "react";
import { ServiceItems } from "../constants";
import { ServiceItem } from "./service-item";

export const ServicesContainer: React.FC<{}> = () => {
	return (
		<div className="container">
			<div className="services">
				<div className="services__wrapper">
					{ServiceItems.map(e => <ServiceItem img={e.img} text={e.text} description={e.description} />)}
				</div>
			</div>
		</div>
	);
};
