import React, { useEffect, useState } from 'react';
import { getinfoPerfil } from "../api/gitlabAPI";
import './styles/QuemSou.css';

function QuemSou() {
  const [fotoPerfil, setfotoPerfil] = useState('');
  const [descPerfil, setDescPerfil] = useState('');
  const [namePerfil, setNamePerfil] = useState('');
  
  useEffect(() => {
    getinfoPerfil()
    .then(res => {
      setDescPerfil(res['bio']);
      setfotoPerfil(res['avatar_url']);
      let name = res['name'].split(' ');
      name = `${name[0]} ${name[1]}`;
      setNamePerfil(name);
    });
  });

  return (
    <div id="QuemSou">
      <span className="about-title">Quem Sou?</span>
      <img src={fotoPerfil} alt='' className="about-picture"/>
      <span className="about-name">{namePerfil}</span>
      <span className="about-description">
        {descPerfil}
      </span>
    </div>
  );
}

export default QuemSou;