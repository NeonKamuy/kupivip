import React from "react";
import { Helmet } from "react-helmet";
import { Categories } from "../../components/categories";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { Main } from "./main";

export const Home: React.FC<{}> = () => {
    return (
        <>
            <Helmet>
                <title>Navbar</title>
            </Helmet>

            <Header />
            <Categories />
            <Main />
            <Footer />
        </>
    );
};
