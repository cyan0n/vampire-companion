import React, { useEffect } from 'react'
import Character from '../types/character'
import Attribute from './attribute'
import AttributesComponent from './attributes'
import NumberInput from './inputs/NumberInput'
import RollCheckButton from './inputs/RollCheckButton'
import Toggle from './inputs/ToggleInput'

const { useState } = React

const CharacterComponent = ({
  character
}: {
  character: Character
}) => {
  const [poolSize, setPoolSize] = useState(0)
  const [poolMod, setPoolMod] = useState(0)
  const [hunger, setHunger] = useState(0)
  const [difficulty, setDifficulty] = useState(0)
  const [isPrivate, setIsPrivate] = useState(false)

  return (
    <div className="pt-5">
      <div className="flex flex-row justify-between mb-3">
        <h1 className="text-xl font-display">{character.name}</h1>
        <h2 className="font-display text-xl">{character.clan}</h2>
      </div>
      <AttributesComponent
        attributes={character.attributes}
        onUpdate={value => setPoolSize(value)}
      />
      <div className="flex flex-row justify-between items-end">
        <NumberInput
          label="Fame"
          min={0} max={5}
          onChange={value => setHunger(value)}
        />
        <NumberInput
          label="Difficoltá"
          onChange={value => setDifficulty(value)}
        />
        <NumberInput
          label="Modificatore"
          min={-5} max={5}
          onChange={value => setPoolMod(value)}
        />
      </div>
      <hr className="mt-4 mb-3"/>
      <div className="flex flex-row justify-between items-center">
        <div className="flex-1 flex-grow">
          <div className="font-display text-3xl flex items-center">
            Pool: <span className="text-5xl ml-3">{poolSize + poolMod}</span>
          </div>
        </div>
        <div className="flex-1 flex-grow text-center">
          <RollCheckButton
            check={{poolSize: poolSize + poolMod, hunger, difficulty}}
            username={character.name}
            is_private={isPrivate}
          />
        </div>
        <div className="flex-1 flex-grow text-right">
          <Toggle
            className="mb-1 w-36"
            label="Nascoto"
            onChange={value => setIsPrivate(value)}
          />
        </div>
      </div>
      <div className="flex justify-center">
      </div>
    </div>
  )
}

export default CharacterComponent