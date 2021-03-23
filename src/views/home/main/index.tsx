import React from "react";
import { ServicesContainer } from "./servces";
import { TopOffersCarousel } from "./top-offers-carousel";

export const Main: React.FC<{}> = ()=>{
  return (
    <main>
      <div className="container">
        <div className="banner">
          <figure className="banner__image">
            <a href="#">
              <img src="/assets/img/banner.jpg" alt="" />
            </a>
          </figure>
        </div>
      </div>

      <div className="container">
        <div className="top-offers">
          <h2 className="top-offers__title">
            Топ категорий
          </h2>
          <TopOffersCarousel />
        </div>
      </div>

      <ServicesContainer />
    </main>
  );
}