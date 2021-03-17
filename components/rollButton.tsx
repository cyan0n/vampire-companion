import { ReactElement } from 'react'
import axios from 'axios'

const url = 'https://discord.com/api/webhooks/820970895547957308/m9oTYkTFeTnkxxkh0Idow3CkDYM90Vem5qzAF4YR_wE1sn413-cY1lciOA6sAyT-y4du'

function send() {
  console.log("SEND")
  axios.post(url, {
    content: "Hello world!",
    tts: true
  }, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

export default function RollButton(): ReactElement {
  return <button onClick={() => send()}>Press me</button>
}