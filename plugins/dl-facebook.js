import { igdl } from 'ruhend-scraper'

let handler = m => m
handler.before = async (m, { conn }) => {

  //if (m.isBaileys || (m.isBaileys && m.fromMe && m.isGroup)) return
  //if (m.isGroup) return 
 // if (m.chat.endsWith('broadcast')) return

if (/https?:\/\/(fb\.watch|(www\.|web\.|m\.)?facebook\.com)/i.test(m.text)) {
let res
try {
conn.reply(m.chat, `🕒 *جاري التحميل...*`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, showAdAttribution: true,
title: packname,
body: wm,
previewType: 0, thumbnail: icons }}})
await m.react(rwait)
res = await igdl(m.text)
} catch {
await m.react(error)
return conn.reply(m.chat, '🚩 *تأكد من الرابط.*', m, fake)}
let result = res.data
if (!result || result.length === 0) {
return conn.reply(m.chat, '🚩 *No se encontraron resultados.*', m, fake)}
let data
try {
await m.react(rwait)
data = result.find(i => i.resolution === "720p (HD)") || result.find(i => i.resolution === "360p (SD)")
} catch {
await m.react(error)
return conn.reply(m.chat, '🚩 *Error al procesar los datos.*', m)}
if (!data) {
return conn.reply(m.chat, '🚩 *No se encontró una resolución adecuada.*', m)}
let video = data.url
try {
await m.react(rwait)
await conn.sendMessage(m.chat, { video: { url: video }, fileName: 'fb.mp4', mimetype: 'video/mp4' }, { quoted: fkontak })
await m.react(done)
} catch {
await m.react(error)
return conn.reply(m.chat, '🚩 *حدث خطأ ما.*', m)}}

}
export default handler
