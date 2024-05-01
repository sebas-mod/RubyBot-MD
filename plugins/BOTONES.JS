const handler = async (m, {conn}) => {
  m.reply(global.Mixto4);
};
handler.command = /^(Mixto4|mixto4|mixtointerna4)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.Mixto4 = `

 await conn.sendButton2(m.chat, bontones, mssg.ig, thumbnail, [
    ['grupo', `${fgbot}`],
    ['grupo', `${fgbot}`]
  ], null, [['grupo', `${fgbot}`]], m)
}
`;
