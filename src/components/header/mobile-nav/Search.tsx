import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeaderActions from "../../../redux/header/actions";
import { HeaderSelectors } from "../../../redux/header/selectors";

export const MobileNavSearch: React.FC<{}> = () => {
    const searchClassName = useSelector(HeaderSelectors.getSearchClassName);
    
    const dispatch = useDispatch();
    const toggleSearch = useCallback(()=>{
        dispatch(HeaderActions.toggleSearch());
    }, []);

    return (
        <nav className={searchClassName}>
            <header className="nav__mobile-header">
                <h2 className="nav__mobile-title">Поиск товаров и брендов</h2>
                <button id="close-search" onClick={toggleSearch} className="close">
                    <svg id="icon-cross" viewBox="0 0 20 20">
                        <path d="M18.2 20L0 1.7 1.7 0 20 18 18 20z"></path>
                        <path d="M1.7 20L20 1.7 18 0 0 18.2 1.7 20z"></path>
                    </svg>
                </button>
            </header>
            <section className="nav__mobile-content nav__mobile-content--search">
                <div className="searchbar">
                    <form action="">
                        <input type="text" placeholder="Поиск товаров и брендов" />
                        <button className="searchbar__btn">
                            <svg id="icon-search" viewBox="0 0 20 20">
                                <path
                                    d="M16.48 9.18c0-4.02-3.24-7.28-7.24-7.28S2 5.16 2 9.18c0 4.02 3.24 7.28 7.24 7.28s7.24-3.26 7.24-7.28zm-2.43 5.02l4.78 4.5-4.78-4.5z"
                                    fill="none"
                                    fill-rule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </form>
                </div>
            </section>
        </nav>
    );
};
