import React, { FC } from "react";

import bg from "../../assets/b.png";
import star from "../../assets/star.svg";
import person from "../../assets/person.svg";

interface iChannel {
  title: string;
}

export const ChannelComponent: FC<iChannel> = ({ title }) => (
  <section className="main__channels">
    <h1 className="main__channels__title">{title}</h1>
    <ul className="main__channels__content">
      <li className="main__channel">
        <img className="channel__preview" src={bg} />
        <div className="channel__stats">
          <div className="channel__stats__meta">
            <span className="channel__star channel__meta">
              4.3
              <img src={star} />
            </span>
            <span className="channel__people channel__meta">
              32/54
              <img src={person} />
            </span>
          </div>
        </div>
        <div className="channel__title">
          Channel
        </div>
        <ul className="channel__tags">
          <li className="channel__tag">#программирование</li>
        </ul>
      </li>
      <li className="main__channel">
        <img className="channel__preview" src={bg} />
        <div className="channel__stats">
          <div className="channel__stats__meta">
            <span className="channel__star channel__meta">
              4.3
              <img src={star} />
            </span>
            <span className="channel__people channel__meta">
              32/54
              <img src={person} />
            </span>
          </div>
        </div>
        <div className="channel__title">
          channel
        </div>
        <ul className="channel__tags">
          <li className="channel__tag">#js</li>
          <li className="channel__tag">#go</li>
        </ul>
      </li>
      <li className="main__channel">
        <img className="channel__preview" src={bg} />
        <div className="channel__stats">
          <div className="channel__stats__meta">
            <span className="channel__star channel__meta">
              4.3
              <img src={star} />
            </span>
            <span className="channel__people channel__meta">
              32/54
              <img src={person} />
            </span>
          </div>
        </div>
        <div className="channel__title">
          channel
        </div>
        <ul className="channel__tags">
          <li className="channel__tag">#js</li>
          <li className="channel__tag">#go</li>
        </ul>
      </li>
      <li className="main__channel">
        <img className="channel__preview" src={bg} />
        <div className="channel__stats">
          <div className="channel__stats__meta">
            <span className="channel__star channel__meta">
              4.3
              <img src={star} />
            </span>
            <span className="channel__people channel__meta">
              32/54
              <img src={person} />
            </span>
          </div>
        </div>
        <div className="channel__title">
          channel
        </div>
        <ul className="channel__tags">
          <li className="channel__tag">#js</li>
          <li className="channel__tag">#go</li>
        </ul>
      </li>
    </ul>
  </section>
);
