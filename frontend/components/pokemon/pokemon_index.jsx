import React from 'react';

class PokemonIndex extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render(){
    const lis = this.props.pokemons.map((pokemon, idx) => {
      return <li key={idx}>{ pokemon.name }</li>
    })
    debugger
    return(
      <div>
        <ul>
          {lis}
        </ul>
      </div>
    )
  }
}

export default PokemonIndex