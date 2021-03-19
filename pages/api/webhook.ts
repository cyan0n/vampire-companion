import { Webhook, MessageBuilder } from 'discord-webhook-node'
import { CheckResult, DieFace } from '../../libs/dice'

const { DISCORD_WEBHOOK } = process.env
const hook = new Webhook({
	url: DISCORD_WEBHOOK,
	retryOnLimit: true,
})

export default (req, res) => {
  const result = JSON.parse(req.body) as CheckResult
  let foo = ""
  result.faces.forEach(face => {
    let emoji = ":eight_pointed_black_star:"
    switch (face) {
      case DieFace.messy: {
        emoji = ":bangbang:"
        break
      }
      case DieFace.critical: {
        emoji = ":grey_exclamation:"
        break
      }
      case DieFace.success: {
        emoji = ":white_check_mark:"
        break
      }
      case DieFace.bestial: {
        emoji = ":skull:"
        break
      }
    }
    foo += `${emoji} `
  })
  const message = new MessageBuilder()
    .setTitle(result.value.toString())
    .setDescription(foo)
  hook.setUsername('Thomas')
  hook.send(message)
		.catch(err => {
			console.log(`Webhook error:`)
			console.error(err.message)
		})
  res.status(200).json({ message: "OK" })
}