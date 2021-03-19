import React from 'react'
import { SendCheck } from '../libs/webhook'

const DISCORD_WEBHOOK = process.env.NEXT_PUBLIC_DISCORD_WEBHOOK

export default function Test(): React.ReactElement {

	const send = async () => {
		
		console.log(DISCORD_WEBHOOK)
		await fetch(DISCORD_WEBHOOK, {
			body: JSON.stringify({content: "hello test"}),
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
			},
		})
	}
	return <button onClick={send}>Press Test</button>
}