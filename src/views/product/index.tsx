import React from "react";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { useProduct } from "../../controllers/categories/hooks";
import { ProductSelectors } from "../../redux/product/selectors";
import { ProductContent } from "./content";
import { ProductSizePickerFAQ } from "./content/size-picker/Faq";

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
			<ProductContent product={product}/>
			<Footer />

			<ProductSizePickerFAQ />
		</>
	);
};
