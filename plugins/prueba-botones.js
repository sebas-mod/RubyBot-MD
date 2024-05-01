
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command }) => {

        if (!global.db.data.chats[m.chat].botones) throw `🚫 ${mssg.gpNsfw(usedPrefix)}`
    //conn.sendButton(m.chat, `✅ ${mssg.random} *${command}*`, fgyt, as.data, [[`▷▷ ${msg.next()}`, `${usedPrefix + command}`]], m)
   m.react(xmoji) 
break
}

handler.help = ['botones', 'botones']
handler.tags = ['botones']
handler.command = /^(botones)$/i
handler.diamond = true
handler.register = true
handler.group = true

export default handler