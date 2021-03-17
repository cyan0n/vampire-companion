import Character from "./character";

export default interface Player {
	name: string;
	character: Character;
}

export class User {
	name: string;
	private character: Character;

	constructor(name: string) {
		this.name = name;
	}

}