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

console.log(bulbasaur);
