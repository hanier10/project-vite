import { PokeApiAdapter, PokeApiFetchAdapter } from "../api/pokeApi.adapter";
import {
  Move,
  PokeapiResponse,
} from "../interfaces/pokeapi-response.interface";

export class Pokemon {
  get imageUrl(): string {
    return `https://pokemon.com/${this.id}.jpg`;
  }

  constructor(
    public readonly id: number,
    public name: string,
    private readonly http: PokeApiAdapter
  ) {}

  scream() {
    console.log(`${this.name.toUpperCase()}!!!`);
  }

  speak() {
    console.log(`${this.name}, ${this.name}`);
  }

  async getMoves(): Promise<Move[]> {
    /*     const { data } = await axios.get<PokeapiResponse>(
      "https://pokeapi.co/api/v2/pokemon/4"
    ); */
    const data = await this.http.getRequest<PokeapiResponse>(
      "https://pokeapi.co/api/v2/pokemon/4"
    );
    console.log(data.moves[0].move.name);

    return data.moves;
  }
}

const pokeApi = new PokeApiAdapter();
const pokeApiFetch = new PokeApiFetchAdapter();

export const charmander = new Pokemon(4, "Charmander", pokeApiFetch);

charmander.getMoves();
