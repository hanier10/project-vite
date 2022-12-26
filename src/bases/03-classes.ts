import axios from "axios";
export class Pokemon {
  get imageUrl(): string {
    return `https://pokemon.com/${this.id}.jpg`;
  }

  constructor(
    public readonly id: number,
    public name: string // public imageUrl: string
  ) {}

  scream() {
    console.log(`${this.name.toUpperCase()}!!!`);
  }

  speak() {
    console.log(`${this.name} ${this.name}`);
  }
  async getMoves() {
    const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon/4");
    console.log(data.moves);
    // return answer;
    return data.moves;
  }
}

export const charmander: Pokemon = new Pokemon(4, "charmander");

// console.log(charmander, charmander.imageUrl);

/* charmander.scream();
charmander.speak(); */

// console.log(charmander.getMoves());
charmander.getMoves();
