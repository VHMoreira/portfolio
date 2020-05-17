import React from 'react';
import './styles/Profissional.css';

function Profissional() {
  return (
    <div id="Profissional">
      <span className="profissional-title">Experiência Profissional</span>
      <div id="jobs-timeline">


        <div className="content">
          <span className="jobs-name">Museu Emilio Goeldi</span>
          <div className="jobs-role">
            Estagiário Voluntário | <span className="jobs-duration">09/2018 - 03/2019</span>
          </div>
          <div className="jobs-description">
            <span>- Aprendi programação com a linguagem Python e JavaScript</span>
            <span>- Aprendi estrutura de aplicações web com Flask (Python)</span>
          </div>
          <span className="jobs-role">Bolsista PIBIC | <span className="jobs-duration">03/2019 - 07/2020</span></span> 
          <div className="jobs-description">
            <span>- Aprendi a utilizar Java para Web com Spring Boot</span>
            <span>- Aprendi a utilizar o VueJS para desenvolvimento frontend</span>
            <span>- Participei da renovação do sistema de ramais web da empresa como
            desenvolvedor frontend.</span>
          </div>
        </div>


        <div className="content">
          <span className="jobs-name">Prodepa</span>
          <div className="jobs-role">
            Estagiário | <span className="jobs-duration">11/2019 - 02/2020</span>
          </div>
          <div className="jobs-description">
            <span>- Aprendi a utilizar Java para Web com Spring Boot</span>
            <span>- Aprendi a utilizar o VueJS para desenvolvimento frontend</span>
            <span>- Participei da renovação do sistema de ramais web da empresa como
            desenvolvedor frontend.</span>
          </div>
        </div>
        <div className="content">
          <span className="jobs-name">Serpro</span>
          <div className="jobs-role">
            Estagiário | <span className="jobs-duration">03/2020 - </span>
          </div>
          <div className="jobs-description">
            <span>- Participo da equipe responsável pela manutenção do sistema de pontos da empresa.</span>
            <span>- Estou obtendo experiência com os SGBD's Postgres e Oracle</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profissional;