import React, { FC } from "react";
import "./styles/Main.style.css";

import { NavbarMainComponent } from "../components/main/navbarmain.component";
import { ChannelComponent } from "../components/main/channels.component";
import { NavbarComponent } from "../components/main/navbar.component";

export const MainPage: FC = () => (
  <>
    <NavbarMainComponent />
    <section className="main__section">
      <NavbarComponent />
      <ChannelComponent {...{ title: "Подписки" }} />
      <ChannelComponent {...{ title: "Активные каналы" }} />
    </section>
  </>
);
