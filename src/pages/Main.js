import React from 'react';
import Home from "./Home";
import QuemSou from "./QuemSou";
import Profissional from "./Profissional";
import Habilidades from "./Habilidades";
import Contatos from "./Contatos";

import NavBar from "../components/Navbar";
import Footbar from "../components/FootBar";

function Main() {
  return (
    <div className="Main">
        <NavBar/>
        <Home/>
        <QuemSou/>
        <Profissional/>
        <Habilidades/>
        <Contatos/>
        <Footbar/>
    </div>
  );
}

export default Main;