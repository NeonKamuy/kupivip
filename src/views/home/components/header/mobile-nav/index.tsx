import React from "react";
import { MobileNavMain } from "./Main";
import { MobileNavQuestions } from "./Questions";
import { MobileNavSearch } from "./Search";

export const MobileNav: React.FC<{}> = () => {
    return (
        <>
            <MobileNavMain />
            <MobileNavSearch />
            <MobileNavQuestions />
        </>
    );
};
