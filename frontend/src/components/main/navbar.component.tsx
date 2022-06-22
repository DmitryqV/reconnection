import React, { FC, ChangeEvent } from "react";
import { useSearchParams, URLSearchParamsInit } from "react-router-dom";

export const NavbarComponent: FC = () => {
  const [search, setSeatch] = useSearchParams();

  const query: URLSearchParamsInit = {
    origin: "main",
    mode: process.env.NODE_ENV,
    source: "stream",
    socket: "false",
    c: "auth",
    u: "developer",
    alert: "true",
    reddirect: "true",
    reddirectTo: "streams",
    code: "utf-8",
  };

  return (
    <div className="main__navbar">
      <div className="main__navbar__search">
        <input
          onInput={(e: ChangeEvent<HTMLInputElement>): void => {
            query.q = e.target.value;
            setSeatch(query);
          }}
          value={search.get("q")}
          type="text"
          className="main__navbar__search-input"
          placeholder="Поиск по интересам"
        />
      </div>
      <ul className="main__navbar__bookmarks">
        <li
          className="main__navbar__badge"
          onClick={() => {
            query.q = "GO";
            setSeatch(query);
          }}
        >
          #GO
        </li>
        <li
          className="main__navbar__badge"
          onClick={() => {
            query.q = "JAVASCRIPT";
            setSeatch(query);
          }}
        >
          #JAVASCRIPT
        </li>
        <li
          className="main__navbar__badge"
          onClick={() => {
            query.q = "БИЗНЕС";
            setSeatch(query);
          }}
        >
          #БИЗНЕС
        </li>
        <li
          className="main__navbar__badge"
          onClick={() => {
            query.q = "Программирование";
            setSeatch(query);
          }}
        >
          #Программирование
        </li>
        <li
          className="main__navbar__badge"
          onClick={() => {
            query.q = ".NET";
            setSeatch(query);
          }}
        >
          #.NET
        </li>
        <li
          className="main__navbar__badge"
          onClick={() => {
            query.q = "твиты";
            setSeatch(query);
          }}
        >
          #твиты
        </li>
        <li
          className="main__navbar__badge"
          onClick={() => {
            query.q = "мемы";
            setSeatch(query);
          }}
        >
          #мемы
        </li>
      </ul>
    </div>
  );
};
