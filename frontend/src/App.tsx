import React, { FC } from "react";
import "@global/normalize.global.css";
import "@global/variables.global.css";
import "@global/style.global.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProfilePage } from "@views/Profile.page";
import { LoginPage } from "@views/Login.page";
import { AdminPage } from "@views/Admin.page";
import { GroupPage } from "@views/Group.page";
import { RoomPage } from "@views/Room.page";
import { MainPage } from "@views/Main.page";

/**
 *  Socket connect;
 **/
import "@sockets/socket";

export const App: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/a" element={<AdminPage />} />
      <Route path="/r" element={<RoomPage />} />
      <Route path="/g" element={<GroupPage />} />
      <Route path="/u" element={<ProfilePage />} />
      <Route path="/m" element={<MainPage />} />
    </Routes>
  </BrowserRouter>
);
