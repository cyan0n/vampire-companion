export enum AttributeCategory {
	Physical,
	Social,
	Mental,
}

export enum AttributeType {
	Offensive,
	Defensive,
}

export type AttributeTypes = "offensive" | "defensive";

export default interface Attribute {
	name: string;
	category: AttributeCategory;
	type: AttributeTypes;
	value: number;
}