import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

function mount(el: HTMLElement) {
  const root = createRoot(el);
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

if (process.env.NODE_ENV === "development") {
  let el = document.getElementById("_auth-root");
  if (el) {
    mount(el);
  }
}

export { mount };
