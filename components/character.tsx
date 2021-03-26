import React from 'react'
import Character from '../types/character'
import Attribute from './attribute'

const { useState } = React

const CharacterComponent = ({
  character
}: {
  character: Character
}) => {
  const [poolSize, setPoolSize] = useState(0)
  const [hunger, setHunger] = useState(0)
  const [difficulty, setDifficulty] = useState(0)
  const [isPrivate, setIsPrivate] = useState(false)
  const [attributes, setAttributes] = useState({
    strength: false,
    agility: false,
    intelligence: false,
    knowledge: false,
    charisma: false,
    will: false,
  })
  
  const test = (ctx) => {
    debugger
    console.log(ctx)
  }

  return (
    <div>
      <h1>{character.name}</h1>
      <h2>{character.clan}</h2>
      <div className="flex flex-row">
        <div className="mr-5">
          <Attribute
            label="Forza"
            value={character.attributes.strength}
            onUpdate={value => test(this)}
          />
          <Attribute
            label="Agilitá"
            value={character.attributes.agility}
            onUpdate={value => setPoolSize(poolSize + value)}
          />
        </div>
        <div className="mr-5">
          <Attribute
            label="Intelligenza"
            value={character.attributes.intelligence}
            onUpdate={value => setPoolSize(poolSize + value)}
          />
          <Attribute
            label="Conoscienza"
            value={character.attributes.knowledge}
            onUpdate={value => setPoolSize(poolSize + value)}
          />
        </div>
        <div className="mr-5">
          <Attribute
            label="Carisma"
            value={character.attributes.charisma}
            onUpdate={value => setPoolSize(poolSize + value)}
          />
          <Attribute
            label="Volontá"
            value={character.attributes.will}
            onUpdate={value => setPoolSize(poolSize + value)}
          />
        </div>
      </div>
      <div>Pool {poolSize}</div>
    </div>
  )
}

export default CharacterComponent