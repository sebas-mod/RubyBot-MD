import {watchFile, unwatchFile} from 'fs';
import chalk from 'chalk';
import {fileURLToPath} from 'url';
import fs from 'fs'; 
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';
import moment from 'moment-timezone';

global.botnumber = ""

global.owner = [
  ['59168683798', '𝘾𝙧𝙚𝙖𝙙𝙤𝙧💜', true],
  ['5493585753625', '𝘾𝙤𝙡𝙖𝙗𝙤𝙧𝙖𝙙𝙤𝙧𝙖💜', true],
  ['5491140951814', '𝘾𝙤𝙡𝙖𝙗𝙤𝙧𝙖𝙙𝙤𝙧💜', true],
  ['5493814726875', '𝘾𝙤𝙡𝙖𝙗𝙤𝙧𝙖𝙙𝙤𝙧💜', true],
  ['59897246324', '𝘼𝙨𝙞𝙨𝙩𝙚𝙣𝙘𝙞𝙖💜', true],
  ['', '𝙍𝙪𝙗𝙮𝘽𝙤𝙩-𝙈𝘿💜', true],
  ['', '𝙍𝙪𝙗𝙮𝘽𝙤𝙩-𝙈𝘿💜', true],
  ['', '𝙍𝙪𝙗𝙮𝘽𝙤𝙩-𝙈𝘿💜', false],
  ['', '𝙍𝙪𝙗𝙮𝘽𝙤𝙩-𝙈𝘿💜', true],
  ['', '𝙍𝙪𝙗𝙮𝘽𝙤𝙩-𝙈𝘿💜', true],
  [''],
  [''],
  [''],
  [''],
  [''],
  [''],
  [''],
  [''], 
  [''],  
  [''],
  [''],
  [''],
  [''], 
  [''], 
  ['']
];

global.suittag = ['59168683798'];
global.prems = ['59168683798'];

global.packname = '𝑻𝒐𝒎𝒂  𝑺𝒕𝒊𝒄𝒌𝒆𝒓';
global.author = '𝑳𝒖𝒄𝒌𝒚𝑩𝒐𝒕-𝑴𝑫 🐲';
global.wm = '𝑳𝒖𝒄𝒌𝒚𝑩𝒐𝒕-𝑴𝑫 🐲';
global.titulowm = '𝑳𝒖𝒄𝒌𝒚𝑩𝒐𝒕-𝑴𝑫 🐲';
global.titulowm2 = `𝑳𝒖𝒄𝒌𝒚𝑩𝒐𝒕-𝑴𝑫 🐲`
global.igfg = '𝑳𝒖𝒄𝒌𝒚𝑩𝒐𝒕-𝑴𝑫 🐲';
global.wait = '🐲 𝑪𝒂𝒓𝒈𝒂𝒏𝒅𝒐...';

global.imagen1 = fs.readFileSync('./Menu2.jpg');
global.imagen2 = fs.readFileSync('./src/nuevobot.jpg');
global.imagen3 = fs.readFileSync('./src/Pre Bot Publi.png');
global.imagen4 = fs.readFileSync('./Menu.png');
global.imagen5 = fs.readFileSync('./src/+18.jpg');
global.imagen6 = fs.readFileSync('./Menu3.png');
global.imagen7 = fs.readFileSync('./src/Descargas.png');
global.imagen8 = fs.readFileSync('./dvs/Dragon ball z.jpg');
global.imagen9 = fs.readFileSync('./dvs/Budies.jpg');

global.mods = [];

//* *******Tiempo***************
global.d = new Date(new Date + 3600000);
global.locale = 'es';
global.dia = d.toLocaleDateString(locale, {weekday: 'long'});
global.fecha = d.toLocaleDateString('es', {day: 'numeric', month: 'numeric', year: 'numeric'});
global.mes = d.toLocaleDateString('es', {month: 'long'});
global.año = d.toLocaleDateString('es', {year: 'numeric'});
global.tiempo = d.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true});
//* ****************************
global.wm2 = `${dia} ${fecha}\n𝑳𝒖𝒄𝒌𝒚𝑩𝒐𝒕-𝑴𝑫 🐲`;
global.gt = '𝑳𝒖𝒄𝒌𝒚𝑩𝒐𝒕-𝑴𝑫 🐲';
global.mysticbot = '𝑳𝒖𝒄𝒌𝒚𝑩𝒐𝒕-𝑴𝑫 🐲';
global.md = 'https://chat.whatsapp.com/LcFTUnvu0Tw1tCnA2ybdR6';
global.mysticbot = 'https://chat.whatsapp.com/LcFTUnvu0Tw1tCnA2ybdR6';
global.fgbot = 'https://chat.whatsapp.com/LcFTUnvu0Tw1tCnA2ybdR6';
global.waitt = '🐲 𝑪𝒂𝒓𝒈𝒂𝒏𝒅𝒐...';
global.waittt = '🐲 𝑪𝒂𝒓𝒈𝒂𝒏𝒅𝒐...';
global.waitttt = '🐲 𝑪𝒂𝒓𝒈𝒂𝒏𝒅𝒐...';
global.nomorown = '59168683798';
global.pdoc = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf'];
global.cmenut = '❖––––––『';
global.cmenub = '┊✦ ';
global.cmenuf = '╰━═┅═━––––––๑\n';
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ';
global.dmenut = '*❖─┅──┅〈*';
global.dmenub = '*┊»*';
global.dmenub2 = '*┊*';
global.dmenuf = '*╰┅────────┅✦*';
global.htjava = '⫹⫺';
global.htki = '*⭑•̩̩͙⊱•••• ☪*';
global.htka = '*☪ ••••̩̩͙⊰•⭑*';
global.comienzo = '• • ◕◕════';
global.fin = '════◕◕ • •';
global.botdate = `*[ 📅 ] Fecha:*  ${moment.tz('America/Mexico_City').format('DD/MM/YY')}`;
global.bottime = `*[ ⏳ ] Hora:* ${moment.tz('America/Mexico_City').format('HH:mm:ss')}`;
global.fgif = {key: {participant: '0@s.whatsapp.net'}, message: {'videoMessage': {'title': wm, 'h': `Hmm`, 'seconds': '999999999', 'gifPlayback': 'true', 'caption': bottime, 'jpegThumbnail': fs.readFileSync('./Menu.png')}}};
global.multiplier = 99;
global.flaaa = [
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=',
];
//* ************************

const file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright('Update \'config.js\''));
  import(`${file}?update=${Date.now()}`);
});
