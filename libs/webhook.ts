import { CheckResult, DieFace } from './dice'

const DISCORD_WEBHOOK = process.env.NEXT_PUBLIC_DISCORD_WEBHOOK

export interface Message {
  content?: string
  username?: string
  avatar_url?: string
}

export const SendMessage = async (message: Message) => {
  await fetch(DISCORD_WEBHOOK, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  })
}

export const SendCheck = async (result: CheckResult, username?: string) => {
  const emojis = result.faces.reduce<string>((acc, cur) => acc + FaceToEmoji(cur), '')
  const message = {
    content: `[${result.value}] ${emojis}`,
    username: username,
  }
  await SendMessage(message)
}

export const FaceToEmoji = (face: DieFace): string => {
  switch (face) {
    case DieFace.messy: return ':bangbang:'
    case DieFace.critical: return ':grey_exclamation'
    case DieFace.success: return ':white_check_mark:'
    case DieFace.messy: return ':skull:'
  }
  return ':eight_pointed_black_star:'
}