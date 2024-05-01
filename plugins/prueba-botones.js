
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command }) => {

        if (!global.db.data.chats[m.chat].botones) throw `

HOLA EL TESS🚫

<script
    src='https://sleekflow.io/whatsapp-button.js'
    async
    onLoad="whatsappButton({
    buttonName:'Info XIA BOT',
    buttonIconSize: '22',
    brandImageUrl:'https://telegra.ph/file/f12faf59a412d274a76fa.png',
    buttonMargin:'true',
    brandName:'XB-ASISTENCIA',
    brandSubtitleText:'Por lo general, responde dentro de un día',
    buttonSize:'regular',
    buttonPosition:'left',
    callToAction:'Iniciar chat',
    phoneNumber:'59176181985',
    welcomeMessage:'Hola 👋',
    prefillMessage:'¡Hola, quiero saber más!',
    })"
    >
</script>`
          
await conn.whatsappButton(m.chat, botones, thumbnail, [
    ['Canal', `${usedPrefix}menu`],
    ['Canal', `${usedPrefix}menuff`]
  ], null, [['Canal', `${fgbot}`]], m)
}

handler.help = ['xd', 'xd']
handler.tags = ['xd']
handler.command = /^(xd)$/i
handler.diamond = true
handler.register = true
handler.group = true

export default handler