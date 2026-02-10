import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./Component/Home";
import "../src/Css/index.css";

createRoot(document.getElementById("root")).render(
  <>
    <Home />
  </>,
);
