import pkg from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto } = pkg

var handler = async (m, { conn, usedPrefix }) => {

let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ""
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: ""
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: "Botones DylanBot-MD",
            subtitle: "",
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons:  
              {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\".menu\",\"id\":\"message\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"grupo\",\"grupo\":\"https://chat.whatsapp.com/LcFTUnvu0Tw1tCnA2ybdR6\",\"merchant_url\":\"https://chat.whatsapp.com/LcFTUnvu0Tw1tCnA2ybdR6"}"
              },
              {
                 "name": "cta_call",
                 "buttonParamsJson": "{\"display_text\":\"call\",\"id\":\"message\"}"
              },
              {
                 "name": "cta_copy",
                 "buttonParamsJson": "{\"display_text\":\"copy\",\"id\":\"123456789\",\"copy_code\":\"message\"}"
              }
           ],
          })
        })
    }
  }
}, {})

await conn.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id })

}
handler.command = /^(mboton)$/i

export default handler  