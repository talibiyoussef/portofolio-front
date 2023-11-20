import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import App from "./app";
import { createRoot } from "react-dom/client";
import "./index.css";

const domNode = document.getElementById("root") as HTMLElement;
const root = createRoot(domNode);
root.render(<App />);
