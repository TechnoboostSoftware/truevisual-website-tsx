import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import PrivacyPolicy from "../components/PrivacyPolicy";

ReactDOM.createRoot(document.getElementById("privacy-policy-root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <PrivacyPolicy />
    </BrowserRouter>
  </React.StrictMode>,
);
