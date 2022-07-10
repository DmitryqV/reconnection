import React, { FC } from "react";
interface Propperties {
  callback: Function;
  query: string;
}
export const QueryComponent: FC<Propperties> = ({ callback, query }) => (
  <li className="main__navbar__badge" onClick={callback()}>
    {query}
  </li>
);
