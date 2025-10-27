import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom"; // ✅ Use HashRouter instead of BrowserRouter

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter> {/* ✅ Wrap your App with HashRouter */}
      <App />
    </HashRouter>
  </React.StrictMode>
);
