import { connectToDatabase } from '../util/mongodb'
import Player from '../types/player'

const collection = 'players'

export const GetAllPlayers = async () => {
	const { db } = await connectToDatabase()
	const result =  await db
		.collection(collection)
		.find({})
		.toArray()
	return JSON.parse(JSON.stringify(result)) as Player[]
}
