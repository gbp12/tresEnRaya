import { Outlet, Link, BrowserRouter } from "react-router-dom";

export default function Root() {
  return (
    <div>
      <h1>Raiz de mi app</h1>
      <Link style={{ margin: "10px" }} to="/tresrayas">
        Tres Rayas
      </Link>
      <Link style={{ margin: "10px" }} to="/buscador">
        Buscador
      </Link>
    </div>
  );
}
