export const pokemonsIds = [1, 20, 30, 44, 66];

/* export const pokemon = {
  id: 1,
  name: "Bulbasaur",
}; */

interface Pokemon {
  id: number;
  name: string;
  age?: number;
}

export const bulbasaur: Pokemon = {
  id: 1,
  name: "Bulbasaur",
};

export const charmander: Pokemon = {
  id: 2,
  name: "Charmander",
};

console.log(bulbasaur);

export const pokemons: Pokemon[] = [];

pokemons.push(bulbasaur, charmander);

console.log(pokemons);
