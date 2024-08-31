import { search, download } from 'aptoide-scraper'
const command = 'apk'; 
let handler = m => m
handler.before = async (m, { conn }) => {

  if (m.text.toLowerCase().startsWith(command)) {
        let text = m.text.trim().substring(command.length).trim();

        if (!text) {
            m.reply(`يرجى إدخال اسم التطبيق بعد الخاصية\n\n*مثال* : ${command} whatsapp`)
            return;
        }
try {
await m.react(rwait)
conn.reply(m.chat, '🚩 *جاري تحميل التطبيق...*', m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, showAdAttribution: true,
title: packname,
body: wm,
previewType: 0, thumbnail: icons,
sourceUrl: 'https://whatsapp.com/channel/0029VahhnPE35fM0fzMVR004' }}})
let searchA = await search(text)
let data5 = await download(searchA[0].id)
let txt = `*乂  APK - DOWNLOADER* 乂\n\n`
txt += `🍟 *اسم التطبيق* : ${data5.name}\n`
txt += `🚩 *الحزمة* : ${data5.package}\n`
txt += `🪴 *التحديث* : ${data5.lastup}\n`
txt += `⚖ *الحجم* :  ${data5.size}`
await conn.sendFile(m.chat, data5.icon, 'thumbnail.jpg', txt, m, null, rcanal) 
await m.react(done)  
if (data5.size.includes('GB') || data5.size.replace(' MB', '') > 999) {
return await conn.reply(m.chat, '🛑 *لا أستطيع تحميل هذا التطبيق*', m )}
await conn.sendMessage(m.chat, {document: {url: data5.dllink}, mimetype: 'application/vnd.android.package-archive', fileName: data5.name + '.apk', caption: null}, {quoted: fkontak})
} catch {
return conn.reply(m.chat, '🛑 *حدث خطأ ما*', m, rcanal )}}
}
export default handler
