import React, { ReactElement } from 'react'

interface NumberInputProps {
  label?: String
  min?: number
  max?: number
  onChange?: (value?: number) => void
  className?: String
}

const NumberInput: React.FC<NumberInputProps> = ({
  label,
  min,
  max,
  onChange,
  className,
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

  const changeValue = (value: number) => {
    setValue(value)
    onChange(value)
  }

  return (
    <div className={`${className} flex flex-col text-center w-28 p-1`}>
      { label && <label className='mb-1'>{label}</label>}
      <div className="flex overflow-hidden rounded bg-gray-500">
        <button className="flex-1 py-1" onClick={decrease}>-</button>
        <div className="flex-1 flex items-center justify-center font-bold"><span>{value}</span></div>
        <button className="flex-1 py-1" onClick={increase}>+</button>
      </div>
    </div>
  )
}

export default NumberInput