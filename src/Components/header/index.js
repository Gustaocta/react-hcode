import React from 'react';
import logo from './images/logo.svg';

export default function Header(props){
    //React.createElement("header",{className:"App-header"},...children);})
    return (
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Seja bem-vindo ao {props.title}.
        </p>
        <a
          className="App-link"
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React 18
        </a>
      </header>
    );
}