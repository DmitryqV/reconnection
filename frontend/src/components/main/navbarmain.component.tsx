import React, { FC } from "react";
import person from "../../assets/p.png";

export const NavbarMainComponent: FC = () => (
  <section className="main__navbar__profile">
  <div className="main__navbar__profile__content">
    <ul className="main__navbar__list">
      <li className="main__navbar__list__item">
        <img
          className="main__navbar__list__item__pick"
          src={person}
          alt="centenario"
        />
        <span className="main__navbar__list__item__nick">centenario</span>
      </li>
    </ul>
    <button className="main__navbar__exit">exit</button>
  </div>
</section>
);
