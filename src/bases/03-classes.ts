export class Pokemon {
  constructor(public readonly id: number, public name: string) {}
}

export const charmander: Pokemon = new Pokemon(4, "charmander");
