import React, { useEffect, useState } from 'react';
import AttributeComponent from './attribute';

interface Attribute {
  label: string
  value: number
}
interface AttributeCategoryProps {
  label: string
  attributes: [
    Attribute,
    Attribute,
  ],
  onUpdate: (value: number) => void
}

const AttributeCategory: React.FC<AttributeCategoryProps> = ({
  label,
  attributes,
  onUpdate = () => {},
}) => {
  const [offensive, setOffensive] = useState(0)
  const [defensive, setDefensive] = useState(0)

  useEffect(() => {
    onUpdate(offensive + defensive)
  }, [offensive, defensive])

  return (
    <div className="flex-grow flex-1">
      <h3 className="font-display text-lg text-center mb-2">{label}</h3>
      <div className="space-y-3">
        <AttributeComponent
          attribute={attributes[0]}
          onUpdate={value => setOffensive(value)}
        />
        <AttributeComponent
          attribute={attributes[1]}
          onUpdate={value => setDefensive(value)}
        />
      </div>
    </div>
  )
}

export default AttributeCategory