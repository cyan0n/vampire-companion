import { Webhook } from 'discord-webhook-node'

const url = 'https://discord.com/api/webhooks/820970895547957308/m9oTYkTFeTnkxxkh0Idow3CkDYM90Vem5qzAF4YR_wE1sn413-cY1lciOA6sAyT-y4du'
const hook = new Webhook(url)

function send() {
	console.log("SEND")
	hook.setUsername("THOMAS")
	hook.send("HELLO")
}

export default (req, res) => {
	send()
	res.status(200).json({ message: "OK"})
}