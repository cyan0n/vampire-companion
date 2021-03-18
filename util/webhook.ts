import axios from 'axios';

const { DISCORD_HOOK_URI } = process.env

if (!DISCORD_HOOK_URI) {
  throw new Error(
    'Please define the DISCORD_HOOK_URI environment variable inside .env'
  )
}

interface EmbedField {
	name: string
	value: string
	inline?: boolean
}

interface EmbedAuthor {
	name?: string
	url?: string
	icon_url?: string
}

interface EmbedImage {
	url?: string
	height?: number
	width?: number
}

interface EmbedFooter {
	text: string
	icon_url?: string
}

interface Embed {
	title?: string
	description?: string
	timestamp?: Date
	color?: number
	author?: EmbedAuthor
	fields?: EmbedField[]
	image?: EmbedImage
	thumbnail?: EmbedImage
	footer?: EmbedFooter
}
/*
interface Webhook {
	content: string
	username?: string
	avatar_url?: string
	embeds?: Embed[]
}*/

class Webhook {
	private content: string
	private username?: string
	private avatar_url?: string
	private embeds?: Embed[]

	setContent(content: string): void {
		this.content = content
	}
}

export default Webhook