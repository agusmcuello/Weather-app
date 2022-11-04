import "./pronostico.css";
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

const semana = [
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
  "Domingo",
];

function Pronostico({ data }) {
  const dayInAWeek = new Date().getDay();
  const forecastDays = semana
    .slice(dayInAWeek, semana.length)
    .concat(semana.slice(0, dayInAWeek));

  return (
    <React.Fragment>
      <label className="title">Diario</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, index) => (
          <AccordionItem key={index}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="item-diario">
                  <img
                    src={`icons/${item.weather[0].icon}.png`}
                    className="icono-pequeño"
                    alt="weather"
                  />
                  <label className="dia">{forecastDays[index]}</label>
                  <label className="dia-descripcion">
                    {item.weather[0].description}
                  </label>
                  <label className="min-max">
                    {Math.round(item.main.temp_min)}°C /{" "}
                    {Math.round(item.main.temp_max)}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <div className="detalles-diarios">
                    <div className="detalles-icono">
                        <label className="caracteristica">Presión</label>
                        <label className="informacion">{item.main.pressure}</label>
                    </div>
                    <div className="detalles-icono">
                        <label className="caracteristica">Índice de humedad</label>
                        <label  className="informacion">{item.main.humidity}%</label>
                    </div>
                    <div className="detalles-icono">
                        <label className="caracteristica">Nubosidad</label>
                        <label  className="informacion">{item.clouds.all}%</label>
                    </div>
                    <div className="detalles-icono">
                        <label className="caracteristica">Velocidad de vientos:</label>
                        <label  className="informacion">{item.wind.speed}m/s</label>
                    </div>
                    <div className="detalles-icono">
                        <label className="caracteristica">Nivel del mar</label>
                        <label  className="informacion">{item.main.sea_level}m</label>
                    </div>
                    <div className="detalles-icono">
                        <label className="caracteristica">Sensación Térmica:</label>
                        <label  className="informacion">{Math.round(item.main.feels_like)}°C</label>
                    </div>
                    
                </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </React.Fragment>
  );
}

export default Pronostico;
