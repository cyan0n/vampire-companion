import { Db } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import middleware from '../../middleware/database';

const handler = nextConnect<NextApiRequest, NextApiResponse>();
handler.use(middleware);
interface ExtendedRequest {
	db: Db
}
handler.get<ExtendedRequest, NextApiResponse>(async (req, res) => {
	let doc = await req.db.collection('companies').findOne({});
	console.log(doc);
	res.json(doc);
});

export default handler;