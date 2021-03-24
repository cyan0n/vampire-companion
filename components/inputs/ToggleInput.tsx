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
    const newValue = !value
    setValue(newValue)
    onChange(newValue)
  }

  return (
    <div onClick={toggleValue} className={`${styles.toggle} relative inline-block w-28 align-middle select-none transition duration-20 ease-in`}>
      <input type="checkbox" checked={value} className={`absolute top-0 block w-8 h-8 rounded-lg bg-white border-4 appearance-none cursor-pointer`} onChange={() => null}/>
      <div className={`overflow-hidden flex items-center justify-center text-sm h-8 rounded bg-gray-300 text-gray-800 cursor-pointer`}>{label}</div>
    </div>
  )
}

export default Toggle