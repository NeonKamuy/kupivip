import React from "react";
import 'glider-js/glider.min.css';
import { CarouselItem } from "./CarouselItem";
import { CarouselItems } from "../constants";
import Glider, { GliderProps as IGliderProps } from 'react-glider';

export const TopOffersCarousel: React.FC<{}> = () => {
	return (
		<div className="carousel top-offers__carousel">
			<div className="glider-contain">
				<Glider className="glider" {...GliderProps}>
					{CarouselItems.map(e => <CarouselItem img={e.img} text={e.text} />)}
				</Glider>
				<button aria-label="Previous" className="glider-prev">
					<span className="carousel__arrow carousel__arrow--left">
						<img src="/assets/img/arrow_left.svg" alt="" />
					</span>
				</button>
				<button aria-label="Next" className="glider-next">
					<span className="carousel__arrow carousel__arrow--right">
						<img src="/assets/img/arrow_right.svg" alt="" />
					</span>
				</button>
			</div>
		</div>
	);
};

const GliderProps: Omit<IGliderProps, "children"> = {
	slidesToShow: 1,
	slidesToScroll: 1,
	draggable: true,
	hasDots: true,
	dots: '.dots',
	hasArrows: true,
	arrows: {
		prev: '.glider-prev',
		next: '.glider-next'
	},
	responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 5,
				slidesToScroll: 1
			}
		}
	]
};
