let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `ادخل الإسم بعد الخاصية`
  try {
    await conn.updateProfileName(text)
    m.reply('😃 تم تغيير الاسم بنجاح !')
  } catch (e) {
    console.log(e)
    throw `حدث خطأ ما`
  }
}
handler.help = ['setbotname']
handler.tags = ['owner']
handler.command = /^(setbotname)$/i

handler.owner = true

export default handler
