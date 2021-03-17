import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import { connectToDatabase } from '../../util/mongodb'
import { ObjectID } from 'mongodb'
import Player from '../../types/player';
import Character from '../../components/character'

const PlayerPage = ({
	player
}: {
	player: Player
}) => {
	return (
		<>
			<h1>{player.name}</h1>
			<Character character={player.character}/>
		</>
	)
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	const { db } = await connectToDatabase()
	const player = await db
		.collection('players')
		.findOne({"_id": new ObjectID(params.id as string)})
	console.log(params)
	return {
		props: {
			player: JSON.parse(JSON.stringify(player)),
		}
	}
}

export default PlayerPage