import React from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router";
import { Categories } from "../../components/categories";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { useProduct } from "../../controllers/categories/hooks";
import { ProductContent } from "./content";

export const Product: React.FC<{}> = () => {
	const { slug } = useParams<{slug: string}>();
  const product = useProduct(slug);

	if(!product) return null;
	return (
		<>
			<Helmet>
				<title>Product</title>
			</Helmet>

			<Header />
			<Categories />
			<ProductContent product={product}/>
			<Footer />
		</>
	);
};
