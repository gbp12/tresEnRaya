import React from "react";
import styles from "./styles/Tablero.module.css";
import { useState, useEffect } from "react";
import { Casilla } from "./Casilla";

export const Tablero = () => {
  const [turno, setTurno] = useState("X");
  const [casillas, setCasillas] = useState(Array(9).fill(null));
  const [ganador, setGanador] = useState(null);
  const winner_combos = [
    [0, 1, 2], // Horizontal
    [3, 4, 5], // Horizontal
    [6, 7, 8], // Horizontal
    [0, 3, 6], // Vertical
    [1, 4, 7], // Vertical
    [2, 5, 8], // Vertical
    [0, 4, 8], // Diagonal
    [2, 4, 6], // Diagonal
  ];
  const checkWinner = () => {
    for (let i = 0; i < winner_combos.length; i++) {
      const [a, b, c] = winner_combos[i];
      if (
        casillas[a] &&
        casillas[a] === casillas[b] &&
        casillas[a] === casillas[c]
      ) {
        return casillas[a];
      }
    }
    return null;
  };
  useEffect(() => {
    var ganador = checkWinner();
    if (ganador) {
      setGanador(ganador);
      setTimeout(() => {
        alert("Ganador: " + ganador);
      }, 100);
    }
  }, [casillas]);
  return (
    <>
      <div className={styles.tablero}>
        {casillas.map((casilla, index) => (
          <Casilla
            key={index}
            index={index}
            value={casilla}
            turno={turno}
            setTurno={setTurno}
            casillas={casillas}
            setCasillas={setCasillas}
            ganador={ganador}
          />
        ))}
      </div>
      <h2 className={styles.turno}>{turno}</h2>
    </>
  );
};
