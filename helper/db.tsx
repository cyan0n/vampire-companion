import { MongoClient } from 'mongodb';

const conn_str = "mongodb+srv://vampire-admin:S241lnqHfrOG73cD@vampirecluster.jbr7r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const db_name = "vampire_companion";
const client = new MongoClient(conn_str, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const dbConnect = async () => {
	if (!client.isConnected()) await client.connect();
	return client.db(db_name)
}

export default dbConnect