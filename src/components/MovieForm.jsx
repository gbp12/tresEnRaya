import React from "react";
import { useFormik } from "formik";
import axios from "axios";
export const MovieForm = ({ setMovies, setCargando }) => {
  const formik = useFormik({
    initialValues: {
      buscador: "",
    },
    onSubmit: (values) => {
      fetchData(values.buscador);
    },
  });
  const handleInputChange = (event) => {
    formik.handleChange(event);
    console.log(event.target.value);
    fetchData(event.target.value);
  };
  const fetchData = async (name) => {
    setCargando(true);
    const url = "https://www.omdbapi.com/?apikey=78e4aae&s=" + name;
    const data = await axios.get(url);
    setMovies(data.data.Search);
    setCargando(false);
  };
  return (
    <form onSubmit={formik.handleSubmit}>
      <h3>Nombre de pelicula </h3>
      <input
        id="buscador"
        name="buscador"
        type="text"
        onChange={handleInputChange}
        value={formik.values.buscador}
      />

      <button type="submit">Submit</button>
    </form>
  );
};
