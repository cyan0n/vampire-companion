import React, { ReactElement } from 'react'
import styles from '../styles/toggle.module.css'

interface ToggleProps {
  label?: string
  onChange?: (value?: boolean) => void
  className?: String
}

const Toggle: React.FC<ToggleProps> = ({
  label,
  onChange,
  className,
}) => {
  const [value, setValue] = React.useState<boolean>(false)

  const toggleValue = () => {
    const newValue = !value
    setValue(newValue)
    onChange(newValue)
  }

  return (
    <div
      onClick={toggleValue}
      className={`
        ${className}
        ${styles.toggle}
        w-28
      `}
    >
      <input type="checkbox"
        checked={value}
        onChange={() => null}
      />
      <div className={`overflow-hidden flex items-center justify-center text-sm h-8 rounded bg-gray-300 text-gray-800 cursor-pointer`}>{label}</div>
    </div>
  )
}

export default Toggle