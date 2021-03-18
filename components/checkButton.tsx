import React from 'react'
import Check from '../util/check'

export default function CheckButton() {
	const [pool, setPool] = React.useState(0)
	const [hunger, setHunger] = React.useState(0)
	const handleClick = () => {
		console.log('CHECK')
		console.log({poolSize: pool, hunger})
		console.log(Check({poolSize: pool, hunger}))
	}

	const updatePool = event => {
		const value = parseInt(event.currentTarget.value)
		setPool(value)
	}

	const updateHunger = event => {
		const value = parseInt(event.currentTarget.value)
		setHunger(value)
	}

	return (
		<div>
			<input type="number" min={0} max={20} value={pool} onChange={updatePool}/>
			<input type="number" min={0} max={20} value={hunger} onChange={updateHunger}/>
			<button onClick={() => handleClick()}>Check</button>
		</div>
	)
}