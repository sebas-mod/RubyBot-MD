
import yts from 'yt-search'
let handler = async (m, { conn, command, text, usedPrefix }) => {

  if (!text) throw `✳️ ponga el nombre de la canción *${usedPrefix + command}* brattyputy`
        let res = await yts(text)
        let vid = res.videos[0]
        if (!vid) throw `✳️ Vídeo/Audio no encontrado`
        let { title, description, thumbnail, videoId, timestamp, views, ago, url } = vid
        //const url = 'https://www.youtube.com/watch?v=' + videoId
  let play = `
        ≡ *FG MUSIC*
┌──────────────
video
└──────────────`
 await conn.sendButton2(m.chat, play7, thumbnail, [
    ['grupo', `${fgbot}`],
    ['grupo', `${fgbot}`]
  ], null, [['grupo', `${fgbot}`]], m)
}
handler.help = ['play7']
handler.tags = ['dl']
handler.command = ['play7', 'playvid']
handler.disabled = false

export default handler