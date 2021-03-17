import Attribute from './attribute';

export interface CharacterStat {
	max: number;
	value: number;
}

export default interface Character {
	name: string;
	clan: string;
	attributes: Attribute[];
	health: CharacterStat;
	will: CharacterStat;
	hunger: CharacterStat;
}

function ParseCharacter(data: Object) {

}