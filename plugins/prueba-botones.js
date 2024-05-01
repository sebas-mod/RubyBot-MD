
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command }) => {

        if (!global.db.data.chats[m.chat].botones) throw `🚫 ${mssg.gpNsfw(usedPrefix)}`
          await conn.sendButton2(m.chat, play, mssg.ig, thumbnail, [
    ['🎶 MP3', `${usedPrefix}fgmp3 ${url}`],
    ['🎥 MP4', `${usedPrefix}fgmp4 ${url}`]
  ], null, [['Canal', `${fgbot}`]], m)
}

handler.help = ['botones', 'botones']
handler.tags = ['botones']
handler.command = /^(botones)$/i
handler.diamond = true
handler.register = true
handler.group = true

export default handler