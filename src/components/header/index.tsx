import React from "react";
import { HeaderBottom } from "./header-bottom";
import { HeaderTop } from "./header-top";
import { MobileNav } from "./mobile-nav";

export const Header: React.FC<{}> = () => {
    return (
        <header className="header">
            <MobileNav />
            <HeaderTop />
            <HeaderBottom />
        </header>
    );
};
