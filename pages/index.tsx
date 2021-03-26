import React from 'react'
import { GetServerSideProps } from 'next'
import Link from 'next/link'
import Player from '../types/player'
import { GetAllPlayers } from '../services/PlayerService'
import Layout from '../components/layout'

interface LandingPageProps {
	players?: Player[]
}

export const getServerSideProps: GetServerSideProps = async () => {
	const players = await GetAllPlayers()
	return {
		props: {
			players,
		},
	}
}

const LandingPage: React.FC<LandingPageProps> = ({
	players,
}) => (
	<Layout className="text-center">
		<h1 className="font-display text-6xl mb-4">Personaggi</h1>
		<ul>
			{players.map(player => (
				<li key={player._id}>
					<Link href={`/player/${player._id}`}>
						<a className="h-14 flex items-center justify-center mx-auto rounded-lg text-4xl w-1/2 bg-gray-700">{player.name}</a>
					</Link>
				</li>
			))}
		</ul>
	</Layout>
)

export default LandingPage