import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  try {
    const pp = imagen2;
    // let vn = './media/menu.mp3'
    const d = new Date(new Date + 3600000);
    const locale = 'es';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `*🐉 I N F O R M A C I Ó N🐉*
 
🐲꙰᠁❥ *◜𝑪𝒓𝒆𝒂𝒅𝒐𝒓◞:* Angelito
🐲꙰᠁❥ *◜𝑾𝒂◞:* wa.me/59168683798
🐲꙰᠁❥ *◜𝑰𝒈◞:* @usxr_angelito
🐲꙰᠁❥ *◜𝑽𝒆𝒓𝒔𝒊𝒐𝒏◞:* 3.2.0
🐲꙰᠁❥ *◜𝑷𝒓𝒆𝒇𝒊𝒋𝒐◞:* ( . )
🐲꙰᠁❥ *◜𝑴𝒐𝒅𝒐◞:* Privado
🐲꙰᠁❥ *◜𝑨𝒄𝒕𝒊𝒗𝒊𝒅𝒂𝒅◞:* ${uptime}
🐲꙰᠁❥ *◜𝑼𝒔𝒖𝒂𝒓𝒊𝒐𝒔◞:* ${totalreg}
🐲꙰᠁❥ *◜𝑽𝒆𝒍𝒐𝒄𝒊𝒅𝒂𝒅◞:* ${speed}
🐲꙰᠁❥ *◜𝑪𝒉𝒂𝒕𝒔 𝒑𝒓𝒊𝒗𝒂𝒅𝒐◞:* ${chats.length - groups.length}
🐲꙰᠁❥ *◜𝑪𝒉𝒂𝒕𝒔 𝒅𝒆 𝒈𝒓𝒖𝒑𝒐◞:* ${groups.length}
🐲꙰᠁❥ *◜𝑪𝒉𝒂𝒕𝒔 𝒕𝒐𝒕𝒂𝒍◞:* ${chats.length}
🐲꙰᠁❥ *◜𝑺𝒖𝒃-𝑩𝒐𝒕𝒔◞:* ${modejadibot ? "activado" : "desactivado"}
`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, 'infobot enviado 📩', m);
  }
};
handler.command = /^(infobot|infobot)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}