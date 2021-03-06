import React, { FC } from "react";
import { ChannelCardComponent } from "@src/components/channel/channelcard.component";

interface iChannel {
  title: string;
}

export const ChannelComponent: FC<iChannel> = ({ title }) => (
  <section className="main__channels">
    <h1 className="main__channels__title">{title}</h1>
    <ul className="main__channels__content">
      <ChannelCardComponent
        {...{
          author: "JAVASCRIPT",
          title: "javascript - hello world",
          rating: 3.3,
          price: 199,
          peoples: 20,
          limitPeoples: 53,
          tags: ["dell", "js", "svg"],
        }}
      />
      <ChannelCardComponent
        {...{
          author: "WORLDEDIT",
          title: "hello",
          rating: 4.3,
          price: 20,
          peoples: 20,
          limitPeoples: 53,
          tags: ["go", "js"],
        }}
      />
      <ChannelCardComponent
        {...{
          author: "simplyfy",
          title: "hello",
          rating: 4.7,
          price: 50,
          peoples: 20,
          limitPeoples: 153,
          tags: ["go", "exp", "hello world"],
        }}
      />
      <ChannelCardComponent
        {...{
          author: "NEST",
          title: "hello",
          rating: 5.0,
          price: 20,
          peoples: 20,
          limitPeoples: 53,
          tags: ["go", "js"],
        }}
      />
    </ul>
  </section>
);
