const api = "https://pokeapi.co/api/v2/pokemon/";

async function getPokemonData() {
  try {
    const response = await fetch(api);
    const data = await response.json();

    const pokemons = data.results;

    const detailPokemons = [];

    for (const detailPokemon of pokemons) {
      const response = await fetch(detailPokemon.url);
      const dataDetail = await response.json();
      detailPokemons.push(dataDetail);
    }

    for (const detail of detailPokemons) {
      const div = document.createElement("div");
      const container = document.getElementById("container");
      div.className = "card";

      // Fetch the image for each Pokemon
      const response = await fetch(detail.forms[0].url);
      const photo = await response.json();
      const imgSrc = photo.sprites.front_default;

      div.innerHTML = `
        <h2>${detail.name}</h2>
        <img src="${imgSrc}" alt="${detail.name}">
        <p>Height: ${detail.height}</p>
        <p>Weight: ${detail.weight}</p>
        <p>Base Experience: ${detail.base_experience}</p>
        <p>Abilities: ${detail.abilities[0].ability.name}</p>
        <p>Types: ${detail.types[0].type.name}</p>
      `;
      container.appendChild(div);
    }
    return detailPokemons;
  } catch (error) {
    console.log(error);
  }
}

getPokemonData();
