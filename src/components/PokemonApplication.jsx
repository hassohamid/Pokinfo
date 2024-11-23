import React, { useState, useEffect } from "react";
import Pokemon from "./Pokemon";
import Steps from "./Steps";

function PokemonApplication() {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => response.json())
      .then((data) => setPokemonList(data.results))
      .catch((error) => console.error("Error fetching Pokemon list:", error));
  }, []);

  const fetchPokemonData = () => {
    if (selectedPokemon) {
      const url = `https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => setPokemonData(data))
        .catch((error) => console.error("Error fetching Pokemon data:", error));
    }
  };

  const handleUserSelection = (e) => {
    setSelectedPokemon(e.target.value);
  };

  return (
    <div className="app-container">
      <select
        onChange={handleUserSelection}
        // value={selectedPokemon}
        id="pokemons"
        defaultValue={"title"}
      >
        <option value={"title"} disabled>
          --- Select Pokémon ---
        </option>
        {pokemonList.map((pokemon) => (
          <option key={pokemon.name} value={pokemon.name}>
            {pokemon.name}
          </option>
        ))}
      </select>

      {pokemonData ? <Pokemon data={pokemonData} /> : <Steps />}

      <button onClick={fetchPokemonData} className="fetchbtn">
        Catch!
      </button>
    </div>
  );
}

export default PokemonApplication;
