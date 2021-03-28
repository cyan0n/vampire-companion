import React, {
  ReactElement,
  useEffect,
  useState,
} from 'react';
import AttributeCategory from './attributeCategory'

interface AttributesProps {
  attributes: {
    strength: number
    agility: number 
		intelligence: number
		knowledge: number
		charisma: number
		will: number
  }
  onUpdate: (value: number) => void
}
const AttributesComponent: React.FC<AttributesProps> = ({
  attributes,
  onUpdate = () => {}
}): ReactElement => {
  const [fisical, setFisical] = useState(0)
  const [social, setSocial] = useState(0)
  const [mental, setMental] = useState(0)

  useEffect(() => {
    onUpdate(fisical + social + mental)
  }, [
    fisical,
    social,
    mental,
  ])

  return (
    <div className="">
      <div className="flex flex-row items-center mb-3">
        <hr className="flex-1"/>
        <h3 className="flex-1 font-display text-center text-2xl">Attributi</h3>
        <hr className="flex-1"/>
      </div>
      <div className="flex flex-row space-x-3">
        <AttributeCategory
          label="Fisici"
          attributes={[
            {
              label: "Forza",
              value: attributes.strength
            },
            {
              label: "Agilità",
              value: attributes.agility
            }
          ]}
          onUpdate={value => {setFisical(value)}}
        />
        <AttributeCategory
          label="Sociali"
          attributes={[
            {
              label: "Carisma",
              value: attributes.charisma
            },
            {
              label: "Volontà",
              value: attributes.will
            }
          ]}
          onUpdate={value => {setSocial(value)}}
        />
        <AttributeCategory
          label="Mentali"
          attributes={[
            {
              label: "Intelligenza",
              value: attributes.intelligence
            },
            {
              label: "Conoscienza",
              value: attributes.knowledge
            }
          ]}
          onUpdate={value => {setMental(value)}}
        />
      </div>
      <hr className="mt-4 mb-3"/>
    </div>
  )
}

export default AttributesComponent