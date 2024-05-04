//import { googleIt } from '@bochilteam/scraper'
import translate from '@vitalets/google-translate-api'
import uploader from '../lib/uploadImage.js'
import googleIt from 'google-it'
import fetch from 'node-fetch'
import axios from 'axios'
import yts from 'yt-search'
import cheerio from 'cheerio'
import gpt from 'api-dylux'
import gtts from 'node-gtts'
import {readFileSync, unlinkSync} from 'fs'
import {join} from 'path'
import fs from 'fs' 
import {Configuration, OpenAIApi} from 'openai';
const url = 'https://wa.me/+13143331111';
const message = '¡Hola! Soy Pi, una IA personal.';

const element = document.createElement('a');
element.href = url;
element.innerText = message;
element.target = '_blank';

document.body.appendChild(element);
const configuration = new Configuration({organization: global.openai_org_id, apiKey: global.openai_key})
const openaiii = new OpenAIApi(configuration)
const idioma = 'es'
import fetch from 'node-fetch'
var handler = async (m, { text,  usedPrefix, command }) => {
if (!text) throw `*Error al usar PI-IA*\n\n*Ejemplo👇🏻*\n⚙️ ${usedPrefix + command} Recomienda una página porno\n⚙️ ${usedPrefix + command} {texto} By Lucky Bot`
try {
conn.sendPresenceUpdate('composing', m.chat);
var apii = await fetch(`https://pi.ai/talktext=${text}`)
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
