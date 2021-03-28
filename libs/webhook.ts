import { CheckResult, DieFace } from './dice'

const PUBLIC_WEBHOOK = process.env.NEXT_PUBLIC_DISCORD_WEBHOOK 
const PRIVATE_WEBHOOK = process.env.NEXT_PUBLIC_PRIVATE_WEBHOOK

export interface Message {
  content?: string
  username?: String
  avatar_url?: string
}

export const SendMessage = async (message: Message, isPrivate: boolean = false) => {
  const url = isPrivate ? PRIVATE_WEBHOOK : PUBLIC_WEBHOOK
  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  })
}

export const SendCheck = async (
  result: CheckResult,
  username?: String,
  isPrivate?: boolean,
) => {
  const emojis = result.faces.reduce<string>((acc, cur) => acc + FaceToEmoji(cur), '')
  const message: Message = {
    content: `[${result.value}] ${emojis}`,
    username,
    avatar_url: GetAvatar(result),
  }
  await SendMessage(message, isPrivate)
}

export const FaceToEmoji = (face: DieFace): string => {
  switch (face) {
    case DieFace.messy: return ':bangbang:'
    case DieFace.critical: return ':grey_exclamation:'
    case DieFace.success: return ':white_check_mark:'
    case DieFace.messy: return ':skull:'
  }
  // default, DieFace.failure
  return ':eight_pointed_black_star:'
}

export const GetAvatar = (result: CheckResult) => {
  if (typeof result.success !== 'boolean') return
  if (result.success) {
    return 'https://www.clipartmax.com/png/middle/179-1795386_patient-success-success-icon-png.png'
  }
  return 'https://icons-for-free.com/iconfiles/png/512/emoji+emotion+fail+feeling+sad+unhappy+icon-1320086032518103614.png '
}
