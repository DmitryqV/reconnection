import React, { FC } from "react";
import "./styles/Room.style.css";

import user from "../assets/user.svg";

import { useParams } from "react-router-dom";

export const RoomPage: FC = () => {
  const params = useParams();
  return (
    <section className="room__section">
      <ul className="room__section__wrapper">
        <li className="room__user">
          <div className="room__user__account">
            <img src={user} />
          </div>
        </li>
        <li className="room__user">
          <div className="room__user__account">
            <img src={user} />
          </div>
        </li>
        <li className="room__user">
          <div className="room__user__account">
            <img src={user} />
          </div>
        </li>
        <li className="room__user">
          <div className="room__user__account">
            <img src={user} />
          </div>
        </li>
        <li className="room__user">
          <div className="room__user__account">
            <img src={user} />
          </div>
        </li>
        <li className="room__user">
          <div className="room__user__account">
            <img src={user} />
          </div>
        </li>
        <li className="room__user">
          <div className="room__user__account">
            <img src={user} />
          </div>
        </li>
        <li className="room__user">
          <div className="room__user__account">
            <img src={user} />
          </div>
        </li>
        <li className="room__user">
          <div className="room__user__account">
            <img src={user} />
          </div>
        </li>
        <li className="room__user">
          <div className="room__user__account">
            <img src={user} />
          </div>
        </li>
        <li className="room__user">
          <div className="room__user__account">
            <img src={user} />
          </div>
        </li>
        <section className="room__controller"></section>
      </ul>
      <section className="room__metadata">
        <h3 className="room__title">JAVASCRIPT - Hello world</h3>
        <div className="room__description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </div>
        <div className="room__tags">
          <span className="room__tag">JAVASCRIPT</span>
          <span className="room__tag">JAVASCRIPT</span>
          <span className="room__tag">JAVASCRIPT</span>
          <span className="room__tag">JAVASCRIPT</span>
          <span className="room__tag">JAVASCRIPT</span>
          <span className="room__tag">JAVASCRIPT</span>
          <span className="room__tag">JAVASCRIPT</span>
          <span className="room__tag">JAVASCRIPT</span>
        </div>
      </section>
      <ul className="room__section__chat">
        <textarea className="room__section__chat__textarea"></textarea>
      </ul>
    </section>
  );
};
