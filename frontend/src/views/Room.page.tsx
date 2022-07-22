import React, { FC } from "react";
import "./styles/Room.style.css";
import user from "../assets/user.svg";

export const RoomPage: FC = () => {
  const users = [1,2,3,4,5,6];
  console.log(users);
  return (
    <section className="room__section">
      <h2 className="room__title">Jaba Script Conference</h2>
      <section className="room__owner">
        <div className="room__meta">321</div>
      </section>
      <ul className="room__other">
        {users.map((_: unknown, index: number) => (
          <li className="room__user" key={"user__"+index}>
            <img src={user} />
          </li>
        ))}
      </ul>
    </section>
  );
};
