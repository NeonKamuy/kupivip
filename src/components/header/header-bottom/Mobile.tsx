import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import HeaderActions from "../../../redux/header/actions";
import { HeaderActionType } from "../../../redux/header/interfaces";

export const HeaderBottomMobile: React.FC<{}> = () => {
    const dispatch = useDispatch();

    const toggleSearch = useCallback(()=>{
        dispatch(HeaderActions.toggleSearch());
    }, []);

    const toggleHamburger = useCallback(()=>{
        dispatch(HeaderActions.toggleMainHamburger());
    }, []);

    const toggleQuestions = useCallback(()=>{
        dispatch(HeaderActions.toggleQuestions());
    }, []);

    return (
        <ul className="header__bottom-mobile-left">
            <li id="hamburger" className="header__bottom-mobile-left-item" data-for="main" onClick={toggleHamburger}>
                <svg
                    xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22">
                    <g fill-rule="nonzero"> <path d="M0 2V0h20v2zM0 12v-2h20v2zM0 22v-2h20v2z" /> </g>
                </svg>
            </li>
            <li id="search" className="header__bottom-mobile-left-item opened" data-for="search" onClick={toggleSearch}>
                <svg id="icon-search" viewBox="0 0 20 20">
                    <path
                        d="M16.48 9.18c0-4.02-3.24-7.28-7.24-7.28S2 5.16 2 9.18c0 4.02 3.24 7.28 7.24 7.28s7.24-3.26 7.24-7.28zm-2.43 5.02l4.78 4.5-4.78-4.5z"
                        fill="none"
                        fill-rule="evenodd"
                    />
                </svg>
            </li>
            <li id="questions" className="header__bottom-mobile-left-item" data-for="questions" onClick={toggleQuestions}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22">
                    <g fill-rule="evenodd">
                        <path
                            fill-rule="nonzero"
                            d="M12.659 16.857H18V2H2v14.857h6.37l2.144 2.246 2.145-2.246zm7.341 2h-6.486l-3 3.143-3-3.143H0V0h20v18.857z"
                        />
                        <path d="M9.086 11.482V9.508h.938c.784 0 1.386-.378 1.386-1.26 0-.854-.602-1.274-1.162-1.274-.56 0-1.12.392-1.12 1.274H7C7 6.442 8.386 5 10.248 5c1.862 0 3.29 1.442 3.29 3.248 0 1.806-1.442 3.234-3.514 3.234h-.938zm.882 3.682c-.84 0-1.512-.672-1.512-1.512 0-.49.21-.896.56-1.176h1.904c.336.28.56.686.56 1.176 0 .84-.672 1.512-1.512 1.512z" />
                    </g>
                </svg>
            </li>
        </ul>
    );
};
