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
    const str = `┏━━━•💌 𝙍𝙪𝙗𝙮𝘽𝙤𝙩-𝙈𝘿 💌•━━━━┓
│ ┌──────────────────┐
│  •💜¡𝙃𝙊𝙇𝘼! @${m.sender.split`@`[0]}
│ └──────────────────┘
││•💜𝘾𝙍𝙀𝘼𝘿𝙊𝙍/𝘼 
││•💜 wa.me/59168683798
││•💜𝙑𝙀𝙍𝙎𝙄𝙊𝙉 𝘿𝙀𝙇 𝘽𝙊𝙏: 𝟹.𝟸.𝟷
││•💜𝙁𝙀𝘾𝙃𝘼: ${date}
││•💜𝙏𝙄𝙀𝙈𝙋𝙊 𝘼𝘾𝙏: ${uptime}                                            
┗━━━━━━━━•◦ 🤖 ◦•━━━━━━━━┛


┏━━━━━━━━━━━━━━━━━━━━━┓
┃╭───────⧟⭑⧟───────•
┃│ *Este es el menú*
┃│ *de apks premium por*
┃│ *el momento no hay muchas*
┃│ *apks pero se irá*
┃│ *se irán aumentando*
┃│ *poco a poco*
┃╰───────⧟⭑⧟───────•
┗━━━━━━━━━━━━━━━━━━━━━┛


┏━━━━━━━━━━━━━━━━━━━━━┓
┃「 ❄️𝘼𝙋𝙆𝙎 𝙋𝙍𝙀𝙈𝙄𝙐𝙈❄️ 」
┃╭───────⧟⭑⧟───────•
┃│❄️.𝘼𝙥𝙠𝙙𝙞𝙣𝙖𝙢𝙞𝙘𝙞𝙨𝙡𝙖𝙣𝙙
┃│❄️.𝘼𝙥𝙠𝙘𝙖𝙥𝙘𝙪𝙩
┃│❄️.𝘼𝙥𝙠𝙗𝙚𝙖𝙘𝙝𝙗𝙪𝙜𝙜𝙮
┃│❄️.𝘼𝙥𝙠𝙢𝙞𝙣𝙚𝙘𝙧𝙖𝙛𝙩
┃│❄️.𝘼𝙥𝙠𝙥𝙞𝙘𝙨𝙖𝙧𝙩
┃│❄️.𝘼𝙥𝙠𝙥𝙤𝙥𝙥𝙮𝙥𝙡𝙖𝙮𝙩𝙞𝙢𝙚
┃│❄️.𝘼𝙥𝙠𝙨𝙥𝙖𝙢
┃│❄️.𝘼𝙥𝙠𝙨𝙥𝙤𝙩𝙞𝙛𝙮
┃│❄️.𝘼𝙥𝙠𝙮𝙤𝙪𝙩𝙪𝙗𝙚𝙢𝙪𝙨𝙞𝙘
┃╰───────⧟⭑⧟───────•
┗━━━━━━━━━━━━━━━━━━━━━┛


┏━━━━━━━━━━━━━━━━━━━━━┓
┃╭───────⧟⭑⧟───────•
┃│ *Úsalo bajo tu propio*
┃│ *riesgo Ruby Bot*
┃│ *no se hace responsable*
┃│ *de nada que haya*
┃│ *pasado con algún fallo*
┃│ *o problema que tenga*
┃╰───────⧟⭑⧟───────•
┗━━━━━━━━━━━━━━━━━━━━━┛`.trim();
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
    conn.reply(m.chat, '💜𝙀𝙨𝙩𝙚 𝙢𝙚𝙣𝙪 𝙩𝙞𝙚𝙣𝙚 𝙪𝙣 𝙚𝙧𝙧𝙤𝙧 𝙞𝙣𝙩𝙚𝙧𝙣𝙤 𝙥𝙤𝙧 𝙡𝙤 𝙘𝙪𝙖𝙡 𝙣𝙤 𝙛𝙪𝙚 𝙥𝙤𝙨𝙞𝙗𝙡𝙚 𝙚𝙣𝙫𝙞𝙖𝙧𝙡𝙤. 𝙧𝙚𝙥𝙤𝙧𝙩𝙖𝙡𝙤 𝙖𝙡 𝙘𝙧𝙚𝙖𝙙𝙤𝙧 𝙤 𝙖𝙡 𝙨𝙩𝙖𝙛𝙛.', m);
  }
};
handler.command = /^(Menuapks|menuapks|menuapk)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}