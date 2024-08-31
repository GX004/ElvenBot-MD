
import fetch from 'node-fetch'
import {mediafiredl} from '@bochilteam/scraper'

let handler = m => m
handler.before = async (m, { conn }) => {

//  if (m.isBaileys || (m.isBaileys && m.fromMe && m.isGroup)) return
  //if (m.isGroup) return 
  //if (m.chat.endsWith('broadcast')) return

    if (/https?:\/\/(www\.)?mediafire\.com/i.test(m.text)) {
try {
await m.react(rwait)
let { title, ext, aploud, size, dl_url } = await mediafiredl(m.text)
let txt = `乂  *¡MEDIAFIRE - DOWNLOADER!*  乂\n\n`
    txt += `✩ *اسم الملف* : ${title}\n`
    txt += `✩ *الحجم* : ${size}\n`
    txt += `✩ *تاريخ النشر* : ${aploud}\n`
    txt += `✩ *نوع الملف* : ${ext}\n\n`
    txt += `*- ↻ جاري التحميل. . .*`
let img = await (await fetch('https://i.ibb.co/wLQFn7q/logo-mediafire.jpg')).buffer()
await conn.sendFile(m.chat, img, 'thumbnail.jpg', txt, fkontak, null)
await conn.sendFile(m.chat, dl_url, title, null, fkontak, null, { mimetype: ext, asDocument: true })
await m.react(done)
} catch {
await m.react(error)
}}}
export default handler
