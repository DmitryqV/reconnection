import React, { FC } from "react";

import bg from "../../assets/b.png";
import star from "../../assets/star.svg";
import person from "../../assets/person.svg";

export const ChannelCardComponent:FC = () => (
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
);
