import { useRouter } from 'next/router';
import { GetStaticProps, GetStaticPaths } from 'next';
import dbConnect from '../../helper/db'

export const getStaticProps: GetStaticProps = async (context) => {
	console.log(context)
	return {
	 props: {}
	}
}

export const getStaticPaths: GetStaticPaths = async () => {
	const db = await dbConnect();
	const players = await db.collection('players').find({})
	const paths = players.map(player => {
		return {
			params: {
				id: player.id.toString()
			}
		}
	})

	return {
		paths,
		fallback: false,
	}
}

const Player = () => {
	const router = useRouter();
	const { id } = router.query;

	return (
		<>
			<h1></h1>
		</>
	)
}

export default Player