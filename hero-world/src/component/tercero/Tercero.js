import React, { Component } from 'react';
import batman from './../../img/batman.jpg';
import wonder from './../../img/wonder.jpg';

// Al componente Tercero, le pasamos otros dos componentes, "Header" y "Hero", y le asignamos los valores.
class Tercero extends Component {
  render () {
    return (
      <Container titulo={ 'Propiedades en React - Usando ...otras'} 
                subtitulo={ 'Podemos ir añadiendo components a otros, pasándoles las variables que deseemos. Al pasar ...otras, podemos pasarle la cantidad de variables que deseemos, sin especificarlas.' }
                color={ '#0052cc' } />
    );
  }
}

class Container extends Component {
  render () {
    let { nombre, ...otras } = this.props;
    /* otras no contiene a la propiedad nombre */    
    return (
      <div className="pageHeros">
        {/* Pasa las otras propiedades a Header */}
        <Header { ...otras } />
        <Hero nombre={ "Batman" } imagen={batman} alt="Batman" />
        <Hero nombre={ "Wonder Woman"} imagen={wonder} alt="Wonder Woman" />
      </div>
    );
  }
}

// El componente Hero lo llamaremos dos veces en Tercero.
class Hero extends Component {
  render () {
    return(
      <div className="hero">
        <div className="imageHero"><img src={ this.props.imagen } alt={ this.props.nombre } /></div>
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

export default Tercero;