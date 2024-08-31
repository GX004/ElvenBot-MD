import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import fetch from 'node-fetch'

let handler = async (m) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) return conn.reply(m.chat, '💥 يرجى الرد على *صورة* او *فيديو*.', m, rcanal)
  await m.react(rwait)
  try {
  conn.reply(m.chat, global.wait, m, {
  contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, showAdAttribution: true,
  title: packname,
  body: wm,
  previewType: 0, thumbnail: icons,
  sourceUrl: channel }}})
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
  let img = await (await fetch(`${link}`)).buffer()
  let txt = `乂  *TINYURL - UPLOADER*  乂\n\n`
      txt += `*» الرابط* : ${link}\n`
      txt += `*» الرابط القصير* : ${await shortUrl(link)}\n`
      txt += `*» الحجم* : ${formatBytes(media.length)}\n`
      txt += `*» الصلاحية* : ${isTele ? 'للأبد' : 'Desconocido'}\n\n`
      txt += `> *${dev}*`

await conn.sendFile(m.chat, img, 'thumbnail.jpg', txt, m, fkontak, rcanal)
await m.react(done)
} catch {
await m.react(error)
}}
handler.help = ['tourl']
handler.tags = ['tools']
handler.command = ['tourl', 'upload']
export default handler

function formatBytes(bytes) {
  if (bytes === 0) {
    return '0 B';
  }
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB']
  const i = Math.floor(Math.log(bytes) / Math.log(1024))
  return `${(bytes / 1024 ** i).toFixed(2)} ${sizes[i]}`;
}

async function shortUrl(url) {
        let res = await fetch(`https://tinyurl.com/api-create.php?url=${url}`)
        return await res.text()
}
