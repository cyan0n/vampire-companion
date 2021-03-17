import { connectToDatabase } from "../../util/mongodb"
import { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'

const handler = nc<NextApiRequest, NextApiResponse>()

handler.get<NextApiRequest, NextApiResponse>(async (req, res) => {
  const { db } = await connectToDatabase()
  const players = await db
    .collection('players')
    .find({})
    .toArray()
  res.status(200).json(players)  
})

export default handler