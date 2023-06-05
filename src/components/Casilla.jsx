import React from "react";
import styles from "./styles/Tablero.module.css";
export const Casilla = ({
  value,
  turno,
  setCasillas,
  setTurno,
  index,
  ganador,
}) => {
  const marcarCasilla = () => {
    if (value === null && ganador === null) {
      console.log(ganador);
      setCasillas((casillas) => {
        const casillasActualizadas = [...casillas];
        casillasActualizadas[index] = turno;
        return casillasActualizadas;
      });
      setTurno(turno === "X" ? "O" : "X");
    }
  };

  return (
    <div className={styles.ficha} onClick={marcarCasilla}>
      {value === null ? " " : value}
    </div>
  );
};
