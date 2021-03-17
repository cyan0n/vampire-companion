import React from 'react'
import Character from '../types/character'
import Attribute from './attribute'

const { useState } = React

const CharacterComponent = ({
  character
}: {
  character: Character
}) => {
  return (
    <div>
      <h1>{character.name}</h1>
      <h2>{character.clan}</h2>
      <Attribute attribute={character.attributes[0]}/>
    </div>
  )
}

export default CharacterComponent