import React, { FC, ChangeEvent } from "react";
import { useSearchParams, URLSearchParamsInit } from "react-router-dom";
import { QueryComponent } from "./query.component";

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
        <QueryComponent
          {...{
            callback: () => {
              query.q = "1";
              setSeatch(query);
            },
            query: "1",
          }}
        />
        <QueryComponent
          {...{
            callback: () => {
              query.q = "2";
              setSeatch(query);
            },
            query: "2",
          }}
        />

        <QueryComponent
          {...{
            callback: () => {
              query.q = "3";
              setSeatch(query);
            },
            query: "3",
          }}
        />

        <QueryComponent
          {...{
            callback: () => {
              query.q = "4";
              setSeatch(query);
            },
            query: "4",
          }}
        />

        <QueryComponent
          {...{
            callback: () => {
              query.q = "5";
              setSeatch(query);
            },
            query: "5",
          }}
        />

        <QueryComponent
          {...{
            callback: () => {
              query.q = "JAVASCRIPT";
              setSeatch(query);
            },
            query: "JAVASCRIPT",
          }}
        />
      </ul>
    </div>
  );
};
