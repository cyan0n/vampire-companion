import React from 'react'

export default function Test(): React.ReactElement {
	const send = async () => {
		await fetch('/api/send', {
			body: JSON.stringify({ msg: "hello thomas!" }),
			method: "POST",
		})
	}
	return <button onClick={send}>Press Test</button>
}