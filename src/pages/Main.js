import React from 'react';
import Home from "./Home";
import QuemSou from "./QuemSou";
import Profissional from "./Profissional";
import Projetos from "./Projetos";
import Contatos from "./Contatos";

import NavBar from "../components/Navbar";

function Main() {
  return (
    <div className="Main">
        <NavBar/>
        <Home/>
        <QuemSou/>
        <Profissional/>
        <Projetos/>
        <Contatos/>
    </div>
  );
}

export default Main;