import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

let el = document.getElementById("root") as HTMLElement;
const root = createRoot(el);
root.render(<App />);
