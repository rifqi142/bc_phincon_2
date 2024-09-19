const api = "https://pokeapi.co/api/v2/pokemon/";
let nextPage = null;
let prevPage = null;
let currentPage = 1;
const limit = 20;
let maxPage = 1;

async function getPokemonData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();

    const pokemons = data.results;

    nextPage = data.next;
    prevPage = data.previous;

    maxPage = Math.ceil(data.count / limit);

    const container = document.getElementById("container");
    container.innerHTML = "";

    for (const detailPokemon of pokemons) {
      const response = await fetch(detailPokemon.url);
      const detail = await response.json();

      const div = document.createElement("div");
      div.className = "card";

      // get image pokemon
      const imgSrc = detail.sprites.front_default;

      // content pokemon
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

    firstPage = document.getElementById("first");
    prev = document.getElementById("prev");
    next = document.getElementById("next");
    lastPage = document.getElementById("last");

    firstPage.className = currentPage === 1 ? "btn-disabled" : "";
    prev.className = prevPage === null ? "btn-disabled" : "";
    next.className = nextPage === null ? "btn-disabled" : "";
    lastPage.className = currentPage === maxPage ? "btn-disabled" : "";

    generateButton();
  } catch (error) {
    console.log(error);
  }
}

function getPageNumber() {
  const numberPages = [];
  const startPage = Math.max(1, currentPage - 2);
  const endPage = Math.min(maxPage, currentPage + 3);

  for (let i = startPage; i <= endPage; i++) {
    numberPages.push(i);
  }

  return numberPages;
}

function generateButton() {
  const pageContainer = document.getElementById("page");
  pageContainer.innerHTML = "";
  const pageNumber = getPageNumber();

  pageNumber.forEach((number) => {
    const button = document.createElement("button");
    button.innerHTML = number;
    button.className = number === currentPage ? "active" : "";
    button.id = `page-${number}`;

    button.addEventListener("click", async () => {
      currentPage = number;
      await getPokemonData(
        `${api}?offset=${(number - 1) * limit}&limit=${limit}`
      );
    });
    pageContainer.appendChild(button);
  });
}

async function handleFirstPage() {
  currentPage = 1;
  await getPokemonData(api);
}

async function handleLastPage() {
  currentPage = maxPage;
  await getPokemonData(`${api}?offset=${(maxPage - 1) * limit}&limit=${limit}`);
}

async function handleNext() {
  if (nextPage) {
    currentPage += 1;
    await getPokemonData(nextPage);
  }
}

async function handlePrev() {
  if (prevPage) {
    currentPage -= 1;
    await getPokemonData(prevPage);
  }
}

document.getElementById("first").addEventListener("click", handleFirstPage);
document.getElementById("next").addEventListener("click", handleNext);
document.getElementById("prev").addEventListener("click", handlePrev);
document.getElementById("last").addEventListener("click", handleLastPage);

getPokemonData(api);
