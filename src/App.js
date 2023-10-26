import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Coucou Petit test React</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>

  );
}
function Compteur() {
  const [compte, setCompte] = useState(0);
  const divStyle = {
    backgroundColor: 'yellow',
    color: 'red',
  };


  return (
    <div style={divStyle}>
      <h1>Bonjour, ceci est un composant React fonctionnel !</h1>
      <p>Compte actuel: {compte}</p>
      <button onClick={() => setCompte(compte + 1)}>Ajouter</button>
      <button onClick={() => setCompte(compte - 1)}>Soustraire</button>
    </div >
  );
}

ReactDOM.render(<Compteur />, document.getElementById('root'));

export default Compteur;
