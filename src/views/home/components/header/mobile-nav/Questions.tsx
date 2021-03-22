import React from "react";

export const MobileNavQuestions: React.FC<{}> = () => {
    return (
        <nav className="nav__mobile questions">
            <header className="nav__mobile-header">
                <h2 className="nav__mobile-title">Help</h2>
                <button id="close-questions" className="close">
                    <svg id="icon-cross" viewBox="0 0 20 20">
                        <path d="M18.2 20L0 1.7 1.7 0 20 18 18 20z"></path>
                        <path d="M1.7 20L20 1.7 18 0 0 18.2 1.7 20z"></path>
                    </svg>
                </button>
            </header>

            <section className="nav__mobile-content nav__mobile-content--questions">
                <ul>
                    <li><a href="">Центр поддержки</a></li>
                    <li><a href="">Доставка</a></li>
                    <li><a href="">Оплата</a></li>
                    <li><a href="">Возврат</a></li>
                    <li><a href="">Таблицы размеров</a></li>
                    <li><a href="">Обратный звонок с сайта</a></li>
                </ul>
            </section>
        </nav>
    );
};
