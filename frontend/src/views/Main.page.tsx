import React, { FC } from "react";
import "./styles/Main.style.css";

import { NavbarComponent } from "../components/main/navbar.component";
import { ChannelComponent } from "../components/main/channels.component";

export const MainPage: FC = () => (
  <section className="main__section">
    <NavbarComponent />
    <ChannelComponent {...{title: "Подписки"}} />
    <ChannelComponent {...{title: "Активные каналы"}}  />
  </section>
);
