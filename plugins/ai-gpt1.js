import fetch from 'node-fetch';
const command = 'ai'; 
let handler = m => m
handler.before = async (m, { conn }) => {

  if (m.text.toLowerCase().startsWith(command)) {
    
        let text = m.text.trim().substring(command.length).trim();

        if (!text) {
            m.reply(`يرجى إدخال سؤال بعد الامر\n\n*مثال* : ${command} hello`)
            return;
        }

  try {

    conn.sendPresenceUpdate('composing', m.chat);

    const BK9api = `https://bk9.fun/ai/chatgpt?q=${encodeURIComponent(text)}`;

    const BK99 = await fetch(BK9api);

    const BK8 = await BK99.json();

    if (BK8.status && BK8.BK9) {

      const respuestaAPI = BK8.BK9;

      conn.reply(m.chat, respuestaAPI, m);

    } else {

      throw "حدث خطأ أثناء معالجة طلبك.";

    }

  } catch (error) {

    throw "حدث خطأ أثناء معالجة طلبك.";

  }

}}
export default handler;
