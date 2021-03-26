import React from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { useCategoryContents } from "../../controllers/categories/hooks";
import { CategoryContent } from "./content";

export const Category: React.FC<{}> = () => {
    const { slug } = useParams<{ slug: string }>();
    const category = useCategoryContents(slug);

    if(!category) return null;
    return (
        <>
            <Helmet>
                <title>{category[0].title}</title>
            </Helmet>

            <Header />
            <CategoryContent contents={category} />
            <Footer />
        </>
    );
};
