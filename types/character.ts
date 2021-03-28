import Attribute from './attribute';

export interface CharacterStat {
	max: number;
	value: number;
}

export default interface Character {
	name: string
	clan: string
	attributes: {
		strength: number
		agility: number 
		intelligence: number
		knowledge: number
		charisma: number
		will: number
	}
	health: CharacterStat
	will: CharacterStat
	hunger: CharacterStat
}

function ParseCharacter(data: Object) {

}