import fetch from 'node-fetch';

const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/([^\/:]+)/;

let handler = m => m;
handler.before = async (m, { conn }) => {

  //if (m.isBaileys || (m.isBaileys && m.fromMe && m.isGroup)) return
  //if (m.isGroup) return 
 // if (m.chat.endsWith('broadcast')) return

  if (/https?:\/\/(www\.)?github\.com\/?/i.test(m.text)) {
    if (!regex.test(m.text)) throw '*📍 الرابط غير موجود!*';

    let [_, user, repo] = m.text.match(regex) || [];
    repo = repo.replace(/.git$/, '');
    const url = `https://api.github.com/repos/${user}/${repo}/zipball`;

    const response = await fetch(url, { method: 'HEAD' });
    const filename = response.headers.get('content-disposition')?.split('filename=')[1]?.replace(/"/g, '') || `${repo}.zip`;

    m.reply(`⏰  _جاري التحميل...._`);
    conn.sendFile(m.chat, url, filename, null, m);
  }
};

export default handler;
