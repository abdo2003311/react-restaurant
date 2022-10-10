import * as React from "react";
import { createRoot } from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter } from "react-router-dom";
import "react-image-gallery/styles/css/image-gallery.css";
import App from "./App";
import i18n from "./config/i18n";
import { Provider } from "react-redux";
import store from "./store";
import { SocketProvider } from "socket.io-react";
import io from "socket.io-client";

const socket = io.connect(process.env.REACT_APP_SERVER_URL);
socket.on("message", (msg) => console.log(msg));
const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <SocketProvider socket={socket}>
          <App />
        </SocketProvider>
      </Provider>
    </I18nextProvider>
  </BrowserRouter>
);
