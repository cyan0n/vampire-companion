import React, { ReactElement } from 'react'

interface NumberInputProps {
  min?: number
  max?: number
  onChange?: (value) => void
}

const NumberInput: React.FC<NumberInputProps> = ({
  min,
  max,
  onChange,
}): ReactElement => {
  const [value, setValue] = React.useState(0)

  const increase = () => {
    if (max != undefined && value > max) {
      changeValue(max)
    } else if (max == undefined || value < max) {
      changeValue(value + 1)
    }
  }

  const decrease = () => {
    if (min != undefined && value < min) {
      changeValue(min)
    } else if (min == undefined || value > min) {
      changeValue(value - 1)
    }
  }

  const changeValue = value => {
    setValue(value)
    onChange(value)
  }

  return (
    <div className="flex m-1 overflow-hidden rounded w-28 bg-gray-300">
      <button className="flex-1 py-1" onClick={decrease}>-</button>
      <div className="flex-1 flex items-center justify-center"><span>{value}</span></div>
      <button className="flex-1 py-1" onClick={increase}>+</button>
    </div>
  )
}

export default NumberInput