import React, {
  ReactElement
} from 'react'
import { Check } from '../../libs/dice'
import { SendCheck } from '../../libs/webhook'

interface RollCheckButtonProps {
  label?: string
  className?: string
  check: {
    poolSize: number
    hunger: number
    difficulty: number
  }
  username?: string
  is_private?: boolean
}

const RollCheckButton: React.FC<RollCheckButtonProps> = ({
  label,
  className,
  check: {
    poolSize,
    hunger,
    difficulty,
  },
  username,
  is_private,
}): ReactElement => {
  const handleClick = async () => {
    const check_result = Check({
      poolSize,
      hunger,
      difficulty,
    })
    SendCheck(check_result, username, is_private)
  }

  return <button
    className={`
      ${className}
      rounded
      bg-red-900
      text-white
      w-24
      m-1
      h-8
    `}
    onClick={handleClick}  
  >{label || 'Lancia'}</button>
}

export default RollCheckButton