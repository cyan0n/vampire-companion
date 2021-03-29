import { GetServerSideProps } from 'next';
import Player from '../../types/player';
import Character from '../../components/character'
import { GetPlayerByName } from '../../services/PlayerService'
import Layout from '../../components/layout';
import Link from 'next/link';

const PlayerPage = ({
	player
}: {
	player: Player
}) => (
	<Layout>
		<Link href={`/`}>
			<a className="text-sm block text-center text-gray-500">« Lista personaggi</a>
		</Link>
		<Character character={player.character}/>
	</Layout>
)

export const getServerSideProps: GetServerSideProps = async ({ params: { name } }) => {
	const player = await GetPlayerByName(name as string)
	return {
		props: {
			player: player
		}
	}
}

export default PlayerPage