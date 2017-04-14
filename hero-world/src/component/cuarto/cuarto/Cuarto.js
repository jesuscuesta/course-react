import React, { Component } from 'react';
import batman from './../../img/batman.jpg';
import wonder from './../../img/wonder.jpg';

//Cuando solo vamos a renderizar, sin añadir funciones, tendrá mejor rendimiento si lo declaramos con const, en lugar de class.
const Cuarto = () =>(
  <div className="pageHeros">
    <Header titulo={ 'Propiedades en React'} 
            subtitulo={ 'Podemos ir añadiendo components a otros, pasándoles las variables que deseemos.' }
            color={ '#0052cc' } />
    <Hero nombre={ "Batman" } imagen={batman} alt="Batman" />
    <Hero nombre={ "Wonder Woman"} imagen={wonder} alt="Wonder Woman" />
  </div>
);

// El componente Hero lo llamaremos dos veces en Segundo.
class Hero extends Component {
  render () {
    return(
      <div className="hero">
        <div className="imageHero"><img src={ this.props.imagen }  alt={ this.props.nombre } /></div>
        <p>Yo soy { this.props.nombre }</p>
      </div>
    );
  }
}

// En un componente, antes de devolver el valor, crear funciones y variables. Aunque no sea aconsejable
// usar CSS inline.
class Header extends Component {
  render () {
    let estilo = {
      color: this.props.color
    };
    
    return (
      <div>
        <h1 style={ estilo }>{ this.props.titulo }</h1>
        <p style={ estilo }>{ this.props.subtitulo }</p>
      </div>
    );
  }
}

export default Cuarto;