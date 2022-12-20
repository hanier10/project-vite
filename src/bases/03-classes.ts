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
}

export const charmander: Pokemon = new Pokemon(4, "charmander");

console.log(charmander, charmander.imageUrl);

charmander.scream();
charmander.speak();
