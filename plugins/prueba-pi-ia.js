import fetch from 'node-fetch'
var handler = async (m, { text,  usedPrefix, command }) => {
if (!text) throw `*Error al usar PI-IA*\n\n*Ejemplo👇🏻*\n⚙️ ${usedPrefix + command} Recomienda una página porno\n⚙️ ${usedPrefix + command} {texto} By Lucky Bot`
try {
conn.sendPresenceUpdate('composing', m.chat);
var apii = await fetch(`https://aemt.me/pi.ai?text=${text}`)
var res = await apii.json()
await m.reply(res.result)
} catch (e) {
await conn.reply(m.chat, `${lenguajeGB['smsMalError3']()}#report ${lenguajeGB['smsMensError2']()} ${usedPrefix + command}\n\n${wm}`, fkontak, m)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)
}}
handler.command = ['pi', 'pi']
handler.help = ['pi', 'pi']
handler.tags = ['herramientas']

handler.premium = false

export default handler
