import { ReactElement } from 'react'
import { Check } from '../libs/dice'

export const handleClick = () => {
  const result = Check({
    poolSize: 6,
    hunger: 2
  })
  console.log(result)
}

export default function RollButton(): ReactElement {
  return <button className="rounded" onClick={() => handleClick()}>Roll me</button>
}