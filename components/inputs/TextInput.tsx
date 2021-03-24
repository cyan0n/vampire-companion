import React, { 
  ChangeEvent,
  ChangeEventHandler,
  ReactElement
} from 'react'

interface TextInputProps {
  label?: String
  onChange?: (value?: String) => void
  className?: String
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  onChange,
  className,
}): ReactElement => {
  const handleChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    onChange ? onChange(event.currentTarget.value) : null
  }

  return (
    <label className={`${className} flex flex-col items-center`}> {label}
      <input type="text" className="h-8 w-32 p-2 text-black rounded" onChange={handleChange}/>
    </label>
  )
}

export default TextInput