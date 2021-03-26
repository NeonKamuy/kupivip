import React, { useCallback } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { useProduct } from "../../controllers/categories/hooks";
import ProductActions from "../../redux/product/actions";
import { ProductSelectors } from "../../redux/product/selectors";
import { ProductContent } from "./content";
import { ProductSizePickerFAQ } from "./content/size-picker/Faq";

export const Product: React.FC<{}> = () => {
    const { slug } = useParams<{ slug: string }>();
    const product = useProduct(slug);

		const dispatch = useDispatch();
		const hideProductSizePickerFAQ = useCallback(()=>{
			dispatch(ProductActions.hideSizePickerFAQ());
		}, []);

    if (!product) return null;
    return (
        <>
            <Helmet>
                <title>Product</title>
            </Helmet>

            <div onClick={hideProductSizePickerFAQ}>
                <Header />
                <ProductContent product={product} />
                <Footer />
            </div>

            <ProductSizePickerFAQ />
        </>
    );
};
