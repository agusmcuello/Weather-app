import "./App.css";
import Clima from "./components/ClimaActual/Clima";
import Navegacion from "./components/Navegacion/Navegacion";
import { apiWheatherUrl, apiKey } from "./components/Api/api";
import { useState } from "react";
import Pronostico from "./components/Pronostico/Pronostico";
import Portada from "./components/Portada/Portada"

function App() {
  const [currentWeather, setCurrentWheather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split("");

    const currentWheatherFetch = fetch(
      `${apiWheatherUrl}/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&lang=es&units=metric`
    );
    const foreCastFetch = fetch(
      `${apiWheatherUrl}/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&lang=es&units=metric`
    );

    Promise.all([currentWheatherFetch, foreCastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();
        setCurrentWheather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((error) => console.log(error));
  };
  
  return (
    <div className="contenedor">
      <Portada/>
      <Navegacion onSearchChange={handleOnSearchChange} />
      {currentWeather && <Clima data={currentWeather} />}
      {forecast&&<Pronostico data={forecast}/>}
    </div>
  );
}

export default App;
