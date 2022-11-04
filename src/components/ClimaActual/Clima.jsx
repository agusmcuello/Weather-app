import "./clima.css";

function Clima({ data }) {
  return (
    <div className="clima">
      <div className="top">
        <div>
          <p className="ciudad">{data.city}</p>
          <p className="descripcion">{data.weather[0].description}</p>
        </div>
        <img src={`icons/${data.weather[0].icon}.png`} alt="wheater" className="icono" />
      </div>
      <div className="bottom">
        <p className="temperatura">{`${Math.round(data.main.temp)}°C`}</p>
        <div className="detalles">
          <div className="parametros">
            <span className="parametro-etiqueta titulo">Detalles</span>
          </div>
          <div className="parametros">
            <span className="parametro-etiqueta">Sensación Térmica</span>
            <span className="parametro-valor">{`${Math.round(data.main.feels_like)}°C`}</span>
          </div>
          <div className="parametros">
            <span className="parametro-etiqueta">Vientos</span>
            <span className="parametro-valor">{data.wind.speed} m/s</span>
          </div>
          <div className="parametros">
            <span className="parametro-etiqueta">Humedad</span>
            <span className="parametro-valor">{data.main.humidity} %</span>
          </div>
          <div className="parametros">
            <span className="parametro-etiqueta">Presión</span>
            <span className="parametro-valor">{data.main.pressure} hpa</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clima;
