import yts from 'yt-search'

var handler = async (m, { text, conn, args, command, usedPrefix }) => {

if (!text) return conn.reply(m.chat, `🍟 *يرجى اضافة عنوان الفيديو الذي تبحث عنه*\n\nمثال:\n ${usedPrefix + command} Kouz1 - Drari`, m, )

conn.reply(m.chat, wait, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, showAdAttribution: true,
title: packname,
body: wm,
previewType: 0, thumbnail: icons }}})

let results = await yts(text)
let tes = results.all
let teks = results.all.map(v => {
switch (v.type) {
case 'video': return `🍟 *العنوان:* 
» ${v.title}

🔗 *الرابط:* 
» ${v.url}

🕝 *الوقت:*
» ${v.timestamp}

🚩 *تاريخ النشر:* 
» ${v.ago}

👀 *المشاهدات:* 
» ${v.views}`}}).filter(v => v).join('\n\n••••••••••••••••••••••••••••••••••••\n\n')

conn.sendFile(m.chat, tes[0].thumbnail, 'yts.jpeg', teks, fkontak, m)

}
handler.help = ['ytsearch']
handler.tags = ['search']
handler.command = ['playlist', 'ytbuscar', 'yts', 'ytsearch']

export default handler
