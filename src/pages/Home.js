import React from 'react';
import './styles/Home.css'

function Home() {
  const greetingTitle = "Bem vindo ao meu portfólio!"
  // const greetingSubtitle = "Bem vindo ao meu portfólio!"
  return (
    <div id="Home">
      <span className="greeting-tilte">{greetingTitle}</span>
      {/* <span className="greeting-subtilte"> {greetingSubtitle}</span> */}
    </div>
  );
}

export default Home;