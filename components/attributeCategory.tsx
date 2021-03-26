import React from 'react';
import AttributeComponent from './attribute';

interface AttributeCategoryProps {
  label: string
  upper: {
    label: string
    value: number
  }
  lower: {
    label: string
    value: number
  }
}

const AttributeCategory:React.FC<AttributeCategoryProps> = ({
  label,
  upper,
  lower,
}) => {
  const [pool, setPool] = React.useState(0)
  return (
    <div>
      <h3>{label} {pool}</h3>
      <AttributeComponent
        label={upper.label}
        value={upper.value}
      />
      <AttributeComponent
        label={lower.label}
        value={lower.value}
      />
    </div>
  )
}

export default AttributeCategory