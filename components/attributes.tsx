import React, {
  ReactElement,
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
}
const AttributesComponent: React.FC<AttributesProps> = ({
  attributes
}): ReactElement => {
  const [poolSize, setPoolSize] = useState(0)

  return (
    <div className="flex flex-row">
      <AttributeCategory
        label="Fisici"
        upper={{ label: "Forza", value: attributes.strength }}
        lower={{ label: "Agilitá", value: attributes.agility }}
      />
      <AttributeCategory
        label="Sociali"
        upper={{ label: "Carisma", value: attributes.charisma }}
        lower={{ label: "Volontà", value: attributes.will }}
      />
      <AttributeCategory
        label="Mentali"
        upper={{ label: "Intelligenza", value: attributes.intelligence }}
        lower={{ label: "Conoscienza", value: attributes.knowledge }}
      />
    </div>
  )
}

export default AttributesComponent