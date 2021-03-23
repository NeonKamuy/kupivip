import React from "react";
import { Helmet } from "react-helmet";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";

export const Product: React.FC<{}> = () => {
	return (
		<>
			<Helmet>
				<title>Product</title>
			</Helmet>

			<Header />
			<Footer />
		</>
	);
};
