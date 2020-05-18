import React from 'react';
import './styles/Habilidades.css';
import BarChart from '../components/BarChart';

function Habilidades() {
  const dataBackend = [
    {x:"Spring Boot", y:8},
    {x:"NodeJS", y:6},
    {x:"Flask", y:7}
  ];

  const dataFrontend = [
    {x:"VueJS", y:8},
    {x:"ReactJS", y:5}
  ];

  const dataDB = [
    {x:"MySQL", y:7},
    {x:"Postgres", y:5},
    {x:"Oracle", y:4},
    {x:"MongoDB", y:5},
  ];

  const dataMobile = [
    {x:"React Native", y:6},
    {x:"Flutter", y:7}
  ]

  return (
    <div id="Habilidades">
      <span className="habilidades-title">Habilidades</span>
      <div className="habilidades-chart">
        <span className="chart-name">Backend</span>
        <BarChart
          width={90}
          height={30}
          data={dataBackend}
        />
      </div>
      <div className="habilidades-chart">
        <span className="chart-name">Frontend</span>
        <BarChart
          width={90}
          height={30}
          data={dataFrontend}
        />
      </div>
      <div className="habilidades-chart">
        <span className="chart-name">Banco de Dados</span>
        <BarChart
          width={90}
          height={30}
          data={dataDB}
        />
      </div>
      <div className="habilidades-chart">
        <span className="chart-name">Mobile</span>
        <BarChart
          width={90}
          height={30}
          data={dataMobile}
        />
      </div>
    </div>
  );
}

export default Habilidades;