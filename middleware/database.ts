import { MongoClient } from 'mongodb';
import nextConnect from 'next-connect';

const conn_str = "mongodb+srv://vampire-admin:S241lnqHfrOG73cD@vampirecluster.jbr7r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const db_name = "sample_training";

const client = new MongoClient(conn_str, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

async function database(req, res, next) {
	if (!client.isConnected()) await client.connect();
	req.dbClient = client;
	req.db = client.db(db_name);
	return next();
}

const middleware = nextConnect();
middleware.use(database);

export default middleware;