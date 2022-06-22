import { createRoot } from "react-dom/client";
import { App } from "./App";
import React, { StrictMode } from "react";

createRoot(document.getElementById("root")).render(
  <StrictMode children={<App />} />
);
