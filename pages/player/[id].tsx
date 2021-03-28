import { GetServerSideProps } from 'next';
import Player from '../../types/player';
import Character from '../../components/character'
import { GetPlayer } from '../../services/PlayerService'
import Layout from '../../components/layout';

const PlayerPage = ({
	player
}: {
	player: Player
}) => (
	<Layout>
		<Character character={player.character}/>
	</Layout>
)

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	const player = await GetPlayer(params.id as string)
	return {
		props: {
			player: player
		}
	}
}

export default PlayerPage