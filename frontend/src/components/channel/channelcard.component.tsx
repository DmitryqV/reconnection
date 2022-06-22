import React, { FC } from "react";
import { Link } from "react-router-dom";

import bg from "../../assets/b.png";
import star from "../../assets/star.svg";
import person from "../../assets/person.svg";
import ruble from "../../assets/ruble.svg";

interface IChannel {
  price: number;
  rating: number;
  peoples: number;
  limitPeoples: number;
  title: string;
  author: string;
  tags: string[];
}

export const ChannelCardComponent: FC<IChannel> = ({
  price,
  rating,
  title,
  tags,
  author,
  peoples,
  limitPeoples,
}) => (
  <Link to="/r/4444132">
    <li className="main__channel">
      <img className="channel__preview" src={bg} />
      <div className="channel__stats">
        <div className="channel__stats__meta">
          <span className="channel__star channel__meta">
            {rating}
            <img src={star} />
          </span>
          <span className="channel__people channel__meta">
            {peoples}/{limitPeoples}
            <img src={person} />
          </span>
          <span className="channel__isruble channel__meta">
            {price} <img src={ruble} />
          </span>
        </div>
      </div>
      <div className="channel__title">
        {author}
        <br />
        {title}
      </div>
      <ul className="channel__tags">
        {tags.map((tag: string, index: number) => (
          <li className="channel__tag" key={index + "tag" + rating + title}>
            #{tag}
          </li>
        ))}
      </ul>
    </li>
  </Link>
);
