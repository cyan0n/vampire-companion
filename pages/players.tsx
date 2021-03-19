import { GetServerSideProps } from 'next'
import Player from '../types/player'
import { connectToDatabase } from '../util/mongodb'
import Link from 'next/link'

const PlayerIndex = ({
  players,
}: {
  players: Player[]
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
      </ul>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { db } = await connectToDatabase()
  const players = await db
    .collection('players')
    .find({})
    .toArray()

  return {
    props: {
      players: JSON.parse(JSON.stringify(players))
    }
  }
}

export default PlayerIndex