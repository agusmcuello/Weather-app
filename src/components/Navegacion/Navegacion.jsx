import { AsyncPaginate } from "react-select-async-paginate";
import "./navegacion.css";
import { useState } from "react";
import { apiOptions, apiUrl } from "../Api/api";

function Navegacion({ onSearchChange }) {
  const [busqueda, setBusqueda] = useState(null);

  const handleOnChange = (data) => {
    setBusqueda(data);
    onSearchChange(data);
  };

  const loadOptions = (inputValue) => {
    return fetch(
      `${apiUrl}/cities?namePrefix=${inputValue}`,
      apiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name} ${city.countryCode}`,
            };
          }),
        };
      })
      .catch((err) => console.error(err));
  };
  return (
    <AsyncPaginate
      placeholder="Seleccione una ciudad"
      debounceTimeout={600}
      value={busqueda}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
}

export default Navegacion;
