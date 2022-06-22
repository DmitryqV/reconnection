import React, { FC, ChangeEvent } from "react";
import { useSearchParams,URLSearchParamsInit } from "react-router-dom";

export const NavbarComponent: FC = () => {
  const [search, setSeatch] = useSearchParams();

  return (
    <div className="main__navbar">
      <div className="main__navbar__search">
        <input
          onInput={(e: ChangeEvent<HTMLInputElement>): void =>
            {
              const query: URLSearchParamsInit = {
                origin: "main",
                mode: process.env.NODE_ENV,
                source: "stream",
                socket: "false",
                c: "auth",
                u: "developer",
                q: e.target.value,
                alert: "true",
                reddirect: "true",
                reddirectTo: "streams",
                code: "utf-8",
              };

              setSeatch(query);

            }
          }
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
  );
};
