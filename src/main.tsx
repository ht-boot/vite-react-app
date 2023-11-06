import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import "./index.less";

const rootElement = document.getElementById("root")!;

const app = ReactDOM.createRoot(rootElement);

app.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
