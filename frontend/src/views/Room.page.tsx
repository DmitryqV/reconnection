import React, { FC } from "react";
import { useParams } from "react-router-dom";

export const RoomPage: FC = () => {
  const params = useParams();
  return <>Room page {params.id}</>;
};
