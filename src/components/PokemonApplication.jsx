import React, { useState, useEffect } from "react";

function PokemonApplication() {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState("");
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

  return;
}

export default PokemonApplication;
