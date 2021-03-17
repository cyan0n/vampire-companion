import DBHandler, { DatabaseRequest } from '../../lib/DBHandler';
import { NextApiResponse } from 'next';
import Player from '../../types/player';

const handler = DBHandler();

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

export default handler;