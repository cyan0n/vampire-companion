import React, { ReactElement } from 'react';
import TextInput from '../components/inputs/TextInput';
import Layout from '../components/layout';
import NumberInput from '../components/inputs/NumberInput'
import ToggleInput from '../components/inputs/ToggleInput'
import { Check } from '../libs/dice'
import { SendCheck } from '../libs/webhook'

const { useState } = React

export default function Roll(): ReactElement {
  const [poolSize, setPoolSize] = useState(0)
  const [hunger, setHunger] = useState(0)
  const [difficulty, setDifficulty] = useState(0)
  const [isPrivate, setIsPrivate] = useState(false)
  const [username, setUsername] = useState<String>('')
  
  const handleClick = async () => {
    const result = Check({
      poolSize,
      hunger,
      difficulty,
    })
    SendCheck(result, username, isPrivate)
  }

  return (
    <Layout>
      <div className='flex flex-col items-center'>
        <TextInput
          label="Name"
          onChange={value => setUsername(value)}
        />
        <NumberInput
          label='Pool'
          min={0} max={10}
          onChange={value => setPoolSize(value)}
        />
        <NumberInput
          label='Hunger'
          min={0} max={5}
          onChange={value => setHunger(value)}
        />
        <NumberInput
          className='mb-2'
          label='Difficulty'
          min={0} max={10}
          onChange={value => setDifficulty(value)}
        />
        <ToggleInput
          label='Private'
          onChange={value => setIsPrivate(value)}
        />
        <button
          className='rounded bg-red-900 text-white w-24 m-1 h-8 mt-4'
          onClick={handleClick}
          disabled={poolSize == 0}
        >Roll!</button>
      </div>
    </Layout>
  )
}