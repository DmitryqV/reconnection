import React, { FC } from "react";

interface iChannel {
  title: string
}

export const ChannelComponent:FC<iChannel> = ({ title }) => (
  <section className="main__channels">
  <h1 className="main__channels__title">{ title }</h1>
  <ul className="main__channels__content">
    <li className="main__channel">
      <article></article>
    </li>
    <li className="main__channel">
      <article></article>
    </li>
    <li className="main__channel">
      <article></article>
    </li>
    <li className="main__channel">
      <article></article>
    </li>
  </ul>
  <ul className="main__channels__content">
    <li className="main__channel">
      <article></article>
    </li>
    <li className="main__channel">
      <article></article>
    </li>
    <li className="main__channel">
      <article></article>
    </li>
    <li className="main__channel">
      <article></article>
    </li>
  </ul>
</section>
);
