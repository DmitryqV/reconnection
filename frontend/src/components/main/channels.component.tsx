import React, { FC } from "react";
import { ChannelCardComponent } from "@src/components/channel/channelcard.component";

interface iChannel {
  title: string;
}

export const ChannelComponent: FC<iChannel> = ({ title }) => (
  <section className="main__channels">
    <h1 className="main__channels__title">{title}</h1>
    <ul className="main__channels__content">
      <ChannelCardComponent />
      <ChannelCardComponent />
      <ChannelCardComponent />
      <ChannelCardComponent />
      <ChannelCardComponent />
      <ChannelCardComponent />
      <ChannelCardComponent />
    </ul>
  </section>
);
