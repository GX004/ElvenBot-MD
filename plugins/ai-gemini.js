import fetch from 'node-fetch';
import uploader from '../lib/uploadImage.js';

const command = 'gemini'; 
let handler = m => m
handler.before = async (m, { conn }) => {

  if (m.text.toLowerCase().startsWith(command)) {
    try {
        let text = m.text.trim().substring(command.length).trim();

        if (!text) {
            m.reply(`يرجى إدخال سؤال بعد الخاصية\n\n*مثال* : ${command} hello`)
            return;
        }


        let BK9api, BK9img;
        if (m.quoted && /image/g.test((m.quoted.msg || m.quoted).mimetype || m.quoted.mediaType || '') && !/webp/g.test((m.quoted.msg || m.quoted).mimetype || m.quoted.mediaType || '')) {
            let BK0 = await m.quoted.download();
            BK9img = await uploader(BK0);
            BK9api = await (await fetch(`https://bk9.fun/ai/geminiimg?url=${BK9img}&q=${encodeURIComponent(text)}`)).json();
        } else {
            BK9api = await (await fetch(`https://bk9.fun/ai/gemini?q=${encodeURIComponent(text)}`)).json();
        }

        if (BK9api.status && BK9api.BK9) {
            const respuestaAPI = BK9api.BK9;
            conn.reply(m.chat, respuestaAPI, m);
        } else {
            throw "حدث خطأ أثناء معالجة طلبك.";
            console.log(error);
        }
    } catch (error) {
        if (typeof error === 'string') throw error;
        throw `حدث خطأ أثناء معالجة طلبك.`;
        console.log(error);
    }
  }
}
export default handler;
