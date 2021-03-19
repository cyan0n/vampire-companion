import React, { ReactElement } from 'react';
import NumberInput from '../components/numberInput'
import { Check } from '../libs/dice'
import { SendCheck } from '../libs/webhook'

const { useState } = React

export default function Roll(): ReactElement {
  const [poolSize, setPoolSize] = useState(0)
  const [hunger, setHunger] = useState(0)
  
  const handleClick = async () => {
    const result = Check({ poolSize, hunger })
    console.log(result)
    SendCheck(result)
  }

  return (
    <>
      <NumberInput min={0} max={10} onChange={value => setPoolSize(value)}/>
      <NumberInput min={0} max={5} onChange={value => setHunger(value)}/>
      <button onClick={handleClick}>Roll!</button>
    </>
  )
}