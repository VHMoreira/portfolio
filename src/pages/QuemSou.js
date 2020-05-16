import React, { useEffect, useState } from 'react';
import { getinfoPerfil } from "../api/gitlabAPI";
import './styles/QuemSou.css';

function QuemSou() {
  const [fotoPerfil, setfotoPerfil] = useState('');
  const [descPerfil, setDescPerfil] = useState('');
  
  useEffect(() => {
    getinfoPerfil()
    .then(res => {
      setDescPerfil(res['bio']);
      setfotoPerfil(res['avatar_url']);
    });
  });

  return (
    <div id="QuemSou">
      <img src={fotoPerfil} alt='' className="about-picture"/>
      <span className="about-description">
        {descPerfil}
      </span>
    </div>
  );
}

export default QuemSou;