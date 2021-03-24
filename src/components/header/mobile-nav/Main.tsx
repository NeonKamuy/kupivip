import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeaderActions from "../../../redux/header/actions";
import { HeaderSelectors } from "../../../redux/header/selectors";

export const MobileNavMain: React.FC<{}> = () => {
    const hamburgerClassName = useSelector(HeaderSelectors.getMainHamburgerClassName);
    const dispatch = useDispatch();
    const toggleHamburger = useCallback(()=>{
        dispatch(HeaderActions.toggleMainHamburger());
    }, []);

    return (
        <nav className={hamburgerClassName}>
            <header className="nav__mobile-header">
                <h2 className="nav__mobile-title">Main</h2>
                <button id="close-main" className="close" onClick={toggleHamburger}>
                    <svg id="icon-cross" viewBox="0 0 20 20">
                        <path d="M18.2 20L0 1.7 1.7 0 20 18 18 20z"></path>
                        <path d="M1.7 20L20 1.7 18 0 0 18.2 1.7 20z"></path>
                    </svg>
                </button>
            </header>

            <section className="nav__mobile-content nav__mobile-content--main">
                <ul>
                    <li><a href="#">Menu Item 1</a></li>
                    <li><a href="#">Menu Item 2</a></li>
                    <li><a href="#">Menu Item 3</a></li>
                    <li><a href="#">Menu Item 4</a></li>
                    <li><a href="#">Menu Item 5</a></li>
                </ul>
            </section>
        </nav>
    );
}