const urlList = "https://pokeapi.co/api/v2/pokemon";

async function getPokemonList(url) {
  const response = await fetch(url);
  
  if (response.ok) {
    const data = await response.json();
    doStuffList(data);
  }
}

function doStuffList(data) {
  // Extract the list of Pokemon from the data
  const pokeList = data.results;

  // Display the list in the browser
  const outputList = document.getElementById("outputList");
  pokeList.forEach(pokemon => {
    const listItem = document.createElement("li");
    listItem.textContent = pokemon.name;
    outputList.appendChild(listItem);
  });
}

function sortPokemon(list) {
    // Sort the list alphabetically by Pokemon name
    list.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  }
  
  // Modify the doStuffList function
  function doStuffList(data) {
    const pokeList = data.results;
  
    // Sort the Pokemon list alphabetically
    sortPokemon(pokeList);
  
    const outputList = document.getElementById("outputList");
    pokeList.forEach(pokemon => {
      const listItem = document.createElement("li");
      listItem.textContent = pokemon.name;
      outputList.appendChild(listItem);
    });
  }
  
  getPokemonList(urlList);