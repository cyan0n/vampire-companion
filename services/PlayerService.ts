import { connectToDatabase } from '../util/mongodb'
import Player from '../types/player'
import { ObjectID } from 'mongodb'

const collection = 'players'

export const GetAllPlayers = async () => {
	const { db } = await connectToDatabase()
	const result =  await db
		.collection(collection)
		.find({})
		.toArray()
	return JSON.parse(JSON.stringify(result)) as Player[]
}

export const GetPlayer = async (id: string) => {
	const { db } = await connectToDatabase()
	const player = await db
		.collection(collection)
		.findOne({"_id": new ObjectID(id)})
	return JSON.parse(JSON.stringify(player)) as Player
}
