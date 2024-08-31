import fetch from 'node-fetch'
const command = 'pp'

let handler = m => m
handler.before = async (m, { conn }) => {

  if (m.text.toLowerCase().startsWith(command)) {
    if (!m.isGroup) return m.reply('الامر يعمل في المجموعات فقط !!') 
        let text = m.text.trim().substring(command.length).trim();
      if (!text) return m.reply('who?')
      
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let url = await conn.profilePictureUrl(who, 'image')
    await conn.sendFile(m.chat, url, 'profile.jpg', `@${who.split`@`[0]}`, m, null, { mentions: [who]})
}}
export default handler
