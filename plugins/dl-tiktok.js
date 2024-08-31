import fg from 'api-dylux';
import axios from 'axios';
import * as cheerio from 'cheerio';
import {tiktok} from '@xct007/frieren-scraper';
import {generateWAMessageFromContent} from '@whiskeysockets/baileys';
import {tiktokdl} from '@bochilteam/scraper';
const CFROSAPI = global.APIs.CFROSAPI;
let handler = m => m
handler.before = async (m, { conn }) => {

//  if (m.isBaileys || (m.isBaileys && m.fromMe && m.isGroup)) return
 // if (m.isGroup) return 
//  if (m.chat.endsWith('broadcast')) return
    if (/https?:\/\/(www\.|v(t|m)\.|t\.)?tiktok\.com/i.test(m.text)) {
     m.react(rwait)  
  if (!/(?:https:?\/{2})?(?:w{3}|vm|vt|t)?\.?tiktok.com\/([^\s&]+)/gi.test(m.text)) throw `*< TIKTOK - DOWNLOADER />*\n\n*☁️ ادخل رابط الفيديو بعد الخاصية.*\n\n*💌 مثال:*\n _${usedPrefix + command} https://vm.tiktok.com/ZM6UHJYtE /_`;
  const texto = `_💌 @${m.sender.split`@`[0]}  ᩭ✎Enviando Video, espere un momento...._`;
  // let buttons = [{ buttonText: { displayText: '♫ 𝙰𝚄𝙳𝙸𝙾 ♫' }, buttonId: `${usedPrefix}tomp3` }]
  try {
m.react('🕒') 
    const aa = {quoted: m, userJid: conn.user.jid};
    const prep = generateWAMessageFromContent(m.chat, {extendedTextMessage: {text: texto, contextInfo: {externalAdReply: {title: packname, body: wm, thumbnail: icons, sourceUrl: yt}, mentionedJid: [m.sender]}}}, aa);
    await conn.relayMessage(m.chat, prep.message, {messageId: prep.key.id, mentions: [m.sender]});
    const dataFn = await conn.getFile(`${CFROSAPI}/api/tiktokv2?url=${m.text}`);
    const desc1n = `_💌  ᩭ✎Tiktok sin marca de agua descargado con éxito_`;
    await conn.sendMessage(m.chat, {video: dataFn.data, caption: desc1n}, {quoted: fkontak});
  } catch (ee1) {
  try {
    //const aa = {quoted: m, userJid: conn.user.jid};
    //const prep = generateWAMessageFromContent(m.chat, {extendedTextMessage: {text: texto, contextInfo: {externalAdReply: {title: packname, body: wm, thumbnail: icons, sourceUrl: yt}, mentionedJid: [m.sender]}}}, aa);
    //await conn.relayMessage(m.chat, prep.message, {messageId: prep.key.id, mentions: [m.sender]});
    const dataF = await tiktok.v1(m.text);
    // let desc1 =  `*𝙽𝙸𝙲𝙺𝙽𝙰𝙼𝙴:* ${dataF.nickname || 'Indefinido'}`
    //const desc1 = `_💌  ᩭ✎تم تنزيل Tiktok بدون علامة مائية بنجاح_`;
    await conn.sendMessage(m.chat, {video: {url: dataF.play}, caption: ''}, {quoted: fkontak});
  } catch (e1) {
    try {
      const tTiktok = await tiktokdlF(m.text);

      // let desc2 = `🔗 *Url:* ${tTiktok.video}`
   //   const desc2 = `_💌  ᩭ✎تم تنزيل Tiktok بدون علامة مائية بنجاح_`;
      await conn.sendMessage(m.chat, {video: {url: tTiktok.video}, caption: ''}, {quoted: fkontak});
    } catch (e2) {
      try {
        const p = await fg.tiktok(m.text);
        // let te = `*𝚄𝚂𝙴𝚁𝙽𝙰𝙼𝙴:* ${p.author || 'Indefinido'}`
  //      const te = `_💌  ᩭ✎تم تنزيل Tiktok بدون علامة مائية بنجاح_`;
        await conn.sendMessage(m.chat, {video: {url: p.nowm}, caption: ''}, {quoted: fkontak});
      } catch (e3) {
        try {
          const {author: {nickname}, video, description} = await tiktokdl(m.text);
          const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd;
          // let cap = `*𝙽𝙸𝙲𝙺𝙽𝙰𝙼𝙴:* ${nickname || 'Indefinido'}`
       //   const cap = `_💌  ᩭ✎تم تنزيل Tiktok بدون علامة مائية بنجاح_`;
          await conn.sendMessage(m.chat, {video: {url: url}, caption: ''}, {quoted: fkontak});
        } catch {
          throw `_*< TIKTOK - DOWNLOADER />*_\n\n*🌟 حدث خطأ ما، اعد مرة اخرا لاحقا.*`;
          }
        }
      }
    }
  }
}}
export default handler;

async function tiktokdlF(url) {
  if (!/tiktok/.test(url)) return `_*< TIKTOK - DOWNLOADER />*_\n\n*✨️ ادخل رابط الفيديو بعد الخاصية.*\n\n*☁️ مثال:*\n _${usedPrefix + command} https://vm.tiktok.com/ZM6UHJYtE /_`;
  const gettoken = await axios.get('https://tikdown.org/id');
  const $ = cheerio.load(gettoken.data);
  const token = $('#download-form > input[type=hidden]:nth-child(2)').attr( 'value' );
  const param = {url: url, _token: token};
  const {data} = await axios.request('https://tikdown.org/getAjax?', {method: 'post', data: new URLSearchParams(Object.entries(param)), headers: {'content-type': 'application/x-www-form-urlencoded; charset=UTF-8', 'user-agent': 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36'}});
  const getdata = cheerio.load(data.html);
  if (data.status) {
    return {status: true, thumbnail: getdata('img').attr('src'), video: getdata('div.download-links > div:nth-child(1) > a').attr('href'), audio: getdata('div.download-links > div:nth-child(2) > a').attr('href')};
  } else {
    return {status: false};
  }
                           }
