import React, {
  ChangeEvent,
  ReactElement
} from 'react'
import styles from '../../styles/toggle.module.css'

interface ToggleProps {
  label?: string
  onChange?: (value?: boolean) => void
  className?: String
}

const Toggle: React.FC<ToggleProps> = ({
  label,
  onChange,
  className,
}): ReactElement => {
  const input = React.useRef(null)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange ? onChange(event.currentTarget.checked) : null
  }

  return (
    <div
      className={`
        ${className}
        ${styles.toggle}
        w-28
      `}
    >
      <input
        type="checkbox"
        ref={input}
        className={styles.input}
        onChange={handleChange}
      />
      <div className={styles.background} onClick={() => input.current.click()}>{label}</div>
    </div>
  )
}

export default Toggle