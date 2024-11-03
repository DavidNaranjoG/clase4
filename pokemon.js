function fetchPokemon() {
    const nombrePokemon = document
      .getElementById("pokemon-name")
      .value.toLowerCase();
  
    if (nombrePokemon === "") { //Si el campo esta vacío salta la alarma
      alert("por favor , ingresa en nombre del pokemon");
      return;
    }
  
    fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`)// se llama la info desde el API
      .then((res) => {
        if (!res.ok) { //Si la respuesta es diferente de Ok salta el error
          throw new Error("pokemon no encontrado");
        }
        return res.json();
      })
      .then((data) => displayPokemon(data))
      .then((data) =>
        displayPokemon(data).catch((error) =>
          console.error("error atrapando el pokemon: ", error)
        )
      );
  }
  
  function displayPokemon(pokemon) {
    const pokemonInfo = document.getElementById("pokemon-info");
    pokemonInfo.innerHTML = `
  <p>nombre:${pokemon.name}</p>
  <p>ID:${pokemon.id}</p>
  <p>Altura:${pokemon.height}</p>
  <p>peso:${pokemon.weight}</p>
  <p><img src="${pokemon.sprites.front_default}" alt="${pokemon.name}"></p>
  `;
  }