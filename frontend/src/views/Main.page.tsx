import React, { FC } from "react";
import "./styles/Main.style.css";

export const MainPage: FC = () => (
  <section className="main__section">
    <div className="main__navbar">
      <div className="main__navbar__search">
        <input type="text" className="main__navbar__search-input" placeholder="Поиск по интересам" />
      </div>
      <ul className="main__navbar__bookmarks">
        <li className="main__navbar__badge">#GO</li>
        <li className="main__navbar__badge">#JAVASCRIPT</li>
        <li className="main__navbar__badge">#БИЗНЕС</li>
        <li className="main__navbar__badge">#Программирование</li>
        <li className="main__navbar__badge">#.NET</li>
        <li className="main__navbar__badge">#твиты</li>
        <li className="main__navbar__badge">#мемы</li>
      </ul>
    </div>
  </section>
);
