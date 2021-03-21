import React, { ReactElement } from 'react'
import styles from '../styles/toggle.module.css'

interface ToggleProps {
  label?: string
  onChange?: (value?: boolean) => void
}

const Toggle: React.FC<ToggleProps> = ({
  label,
  onChange,
}) => {
  const [value, setValue] = React.useState<boolean>(false)

  const toggleValue = () => {
    setValue(!value)
    onChange(value)
  }

  return (
    <>
      <div className='relative inline-block w-28 mr-2 align-middle select-none transition duration-20 ease-in'>
        <input type="checkbox" onChange={() => null} checked={value} className={`${value ? 'right-0 border-green-500' : 'right-full-minus-w-6'} absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer`}/>
        <div onClick={() => setValue(!value)} className={`${value ? 'bg-green-500' : ''} overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer`}></div>
      </div>
      <label className='text-xs text-gray-700'>{label}</label>
    </>
  )
}

export default Toggle