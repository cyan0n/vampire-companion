import { Db } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import middleware from '../middleware/database';

export interface DatabaseRequest {
	db: Db
}

export default function() {
	const handler = nextConnect<NextApiRequest, NextApiResponse>();
	handler.use(middleware);
	return handler;
}