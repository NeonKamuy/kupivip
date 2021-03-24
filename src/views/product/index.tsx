import React from "react";
import { Helmet } from "react-helmet";
import { Categories } from "../../components/categories";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { ProductContent } from "./content";

export const Product: React.FC<{}> = () => {
	return (
		<>
			<Helmet>
				<title>Product</title>
			</Helmet>

			<Header />
			<Categories />
			<ProductContent />
			<Footer />
		</>
	);
};
