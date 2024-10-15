import fetch from 'node-fetch';

const command = 'gpt4'; 
let handler = m => m
handler.before = async (m, { conn }) => {

  if (m.text.toLowerCase().startsWith(command)) {
        let text = m.text.trim().substring(command.length).trim();

        if (!text) {
            m.reply(`يرجى إدخال سؤال بعد الخاصية\n\n*مثال* : ${command} hello`)
            return;
        }
  try {
    conn.sendPresenceUpdate('composing', m.chat);

    const GXApiUrl = 'https://bk9.fun/ai/gpt4?q=';
    const query = encodeURIComponent(text || '');
    const response = await fetch(GXApiUrl + query);
    const data = await response.json();

    if (data.status && data.BK9) {
      const apiResponse = data.BK9;
      conn.reply(m.chat, apiResponse, m);
    } else {
      throw new Error('An error occurred while processing your request.');
    }
  } catch (error) {
    throw new Error('An error occurred while processing your request.');
  }
}}
handler.tags = ['ai'];
handler.help = ['gpt4'];
export default handler;
