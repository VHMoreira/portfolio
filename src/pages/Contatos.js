import React from 'react';
import './styles/Contatos.css';
import { Place, Smartphone, Email, Instagram, Twitter, GitHub, LinkedIn } from "@material-ui/icons";

function Contatos() {


  return (
    <div id="Contatos">
      <span className='contatos-title'>Contatos</span>
      <div className='contatos-info'>
        <span className='contatos-name'>Vitor Henrique Moreira de Souza</span>
        <span><Place/>Belém - Pará - Brasil</span>
        <span><Smartphone/>(91)98539-7070</span>
        <span><Email/>vhsouzaeng@gmail.com</span>
        <a href="https://www.instagram.com/vhmoreir"><span><Instagram/>vhmoreir</span></a>
        <a href="https://twitter.com/vitorlewisk"><span><Twitter/>vitorlewisk</span></a>
        <a href="https://github.com/VHMoreira"><span><GitHub/>VHMoreira</span></a>
        <a href="https://www.linkedin.com/in/vhmoreiras/"><span><LinkedIn/>vhmoreiras</span></a>
      </div>
    </div>
  );
}

export default Contatos;