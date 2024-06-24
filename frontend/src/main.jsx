import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import RouteConfig from "./route/RouteConfig.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouteConfig />
    </Provider>
  </React.StrictMode>
);
