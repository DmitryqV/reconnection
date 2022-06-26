import React, { FC } from "react";
import "./styles/Room.style.css";

import { useParams } from "react-router-dom";

export const RoomPage: FC = () => {
  const params = useParams();
  return (
    <section className="room__section">
      <ul className="room__section__wrapper">
        <li className="room__user"></li>
        <li className="room__user"></li>
        <li className="room__user"></li>
        <li className="room__user"></li>
        <li className="room__user"></li>
        <li className="room__user"></li>
        <li className="room__user"></li>
        <li className="room__user"></li>
        <li className="room__user"></li>
        <li className="room__user"></li>
        <li className="room__user"></li>
        <li className="room__user"></li>
      </ul>
      <ul className="room__section__chat"></ul>
    </section>
  );
};
