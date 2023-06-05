import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root.jsx";
import Ter from "./routes/Ter.jsx";
import Buscador from "./routes/Buscador.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/tresrayas",
    element: <Ter />,
  },
  {
    path: "tresrayas/prueba",
    element: <h1>hola esto es una prueba</h1>,
  },
  {
    path: "/buscador",
    element: <Buscador />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
