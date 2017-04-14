import React, { Component } from 'react';
import batman from './../../img/batman.jpg';
import wonder from './../../img/wonder.jpg';
import superman from './../../img/superman.jpg';
import greenlantern from './../../img/greenlantern.jpg';

// Declaramos state, que será lo que podamos actualizar, y que hará el reenderizado de las propiedades.
class Quinto extends Component {
  constructor () {
    super();
    this.state = {
      superheros: [
        {
          name: 'Superman',
          image: superman
        },
        {
          name: 'Wonder Woman',
          image: wonder
        },
        {
          name: 'Batman',
          image: batman
        },
        {
          name: 'Green Lantern',
          image: greenlantern
        },
      ],
    };
  }

  render () {
    const heroes = this.state.superheros.map(t => (
       <Hero nombre={t.name} imagen={t.image} alt={ t.name } />
    ));
    return (
      <div className="pageHeros">
        <Header titulo={ 'Propiedades en React'} 
                subtitulo={ 'Podemos ir añadiendo components a otros, pasándoles las variables que deseemos.' }
                color={ '#0052cc' } />
        {heroes}
      </div>
    );
  }
}

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


export default Quinto;