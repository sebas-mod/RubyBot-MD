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
const GitHubApi = require('simple-github')(process.env.GH_TOKEN);
const github = new GitHubApi();

const main = async (
) => {
  const repo = await github.paginate(`GET /repos/{owner}/{repo}`, options => {
    return github.repos.getContent(options);
  }, {
    owner: '{owner}',
    repo: '{repo}',
    path: 'path/to/file.md',
  });

  const content = repo.content[0];

  const updatedContent = `# Esto es una actualización desde el bot de Markdown\n\n${content.content}`;

  await github.repos.updateContent({
    ...repo,
    content: updatedContent,
  });
};

main();

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
