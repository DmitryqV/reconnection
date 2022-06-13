import React from "react";
import "@global/normalize.global.css";
import "@global/variables.global.css";
import "@global/style.global.css";
import { LoginPage } from "@views/Login.page";

/**
 *  Socket connect;
 **/
import "@sockets/socket";

export const App = () => <LoginPage />;
