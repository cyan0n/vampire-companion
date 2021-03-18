import React from 'react'
import { GetServerSideProps } from 'next'
import Link from 'next/link'
import Player from '../types/player'
import { getAllPlayers } from '../services/PlayerService'

interface LandingPageProps {
	players?: Player[]
}

export const getServerSideProps: GetServerSideProps = async () => {
	const players = await getAllPlayers()
	return {
		props: {
			players,
		},
	}
}

const LandingPage: React.FC<LandingPageProps> = ({
	players,
}) => {
	return (
		<div>
			<h1>Players</h1>
			<ul>
				{players.map(player => (
					<li key={player._id}>
						<Link href={`/player/${player._id}`}>
							<a>{player.name}</a>	
						</Link>
					</li>
				))}
				<li>Master</li>
			</ul>
		</div>
	)
}

export default LandingPage