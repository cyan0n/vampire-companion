import DBHandler, { DatabaseRequest } from '../../lib/DBHandler';
import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect'
import Player from '../../types/player';
import { connectToDatabase } from "../../util/mongodb"

const handler = nc<NextApiRequest, NextApiResponse>()
handler.get<NextApiRequest, NextApiResponse>(async (req, res) => {
	console.log('hello')
	const { db } = await connectToDatabase()

	const players = await db.collection("players").find({})
	res.status(200).json(players)
})
/* const handler = DBHandler();

handler.post<DatabaseRequest, NextApiResponse>(async (req, res) => {
	let data: Player = JSON.parse(req.body);
	await req.db.collection('players').insertOne(data);

	res.status(200).json({ message: 'ok' });
});

handler.get<DatabaseRequest, NextApiResponse>(async (req, res) => {
	let doc = await req.db.collection('players').findOne({});
	console.log(doc);
	res.status(200).json(doc);
})
*/
export default handler;