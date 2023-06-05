import { Tablero } from "../components/Tablero";
import styles from "../components/styles/Tablero.module.css";
import { Outlet, Link } from "react-router-dom";
export default function Ter() {
  return (
    <>
      <Link to="/">
        <div className={styles.back}>←</div>
      </Link>
      <h1>TRES RAYAS</h1>

      <Tablero />
    </>
  );
}
