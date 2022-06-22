import React, { FC, ChangeEvent } from "react";
import { useSearchParams } from "react-router-dom";

export const NavbarComponent: FC = () => {
  const [search, setSeatch] = useSearchParams();

  return (
    <div className="main__navbar">
      <div className="main__navbar__search">
        <input
          onInput={(e: ChangeEvent<HTMLInputElement>) => setSeatch({auth: "developer", u: "developer", q: e.target.value, s: "development", socket: "socketID__development"})}
          value={search.get("q")}
          type="text"
          className="main__navbar__search-input"
          placeholder="Поиск по интересам"
        />
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
  )
};
