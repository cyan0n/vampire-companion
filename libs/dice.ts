export enum DieFace {
  messy,
  critical,
  success,
  failure,
  bestial,
}

export const Roll = (hunger: boolean = false): DieFace => {
  const value = Math.floor((Math.random() * 10) + 1)
  console.log(value)
  if (value == 10) {
    console.log("messy/critical")
    return hunger ? DieFace.messy : DieFace.critical
  }
  if (value > 5) {
    console.log("succ")
    return DieFace.success
  }
  if (hunger && value == 1) {
    console.log("bestial")
    return DieFace.bestial
  }
  console.log("fail")
  return DieFace.failure
}

export interface CheckResult {
  value: number,
  faces: DieFace[]
  critical: boolean
  messyCritical: boolean
  beastialFailure: boolean
  success?: boolean
}


export const Check = ({
  poolSize,
  hunger,
  difficulty
}: {
  poolSize: number
  hunger: number
  difficulty?: number
}) => {
  const result: CheckResult = {
    value: 0,
    faces: new Array<DieFace>(),
    critical: false,
    messyCritical: false,
    beastialFailure: false,
  }

  let hungerCount = hunger
  let criticalCount = 0
  for(let i = 0; i < poolSize; i++) {
    const face = Roll(hungerCount-- > 0)
    result.faces.push(face)
    switch (face) {
      case DieFace.messy: {
        result.messyCritical = true
      }
      case DieFace.critical: {
        if (++criticalCount % 2 == 0) {
          result.critical = true
          result.value += 2
        }
      }
      case DieFace.success: {
        result.value++
        break
      }
      case DieFace.bestial: {
        result.beastialFailure = true
        break;
      }
    }
  }
  result.faces.sort()

  if (difficulty) {
    result.success = result.value >= difficulty
  }

  return result;
}
