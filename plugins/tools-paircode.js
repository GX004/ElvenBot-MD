import fetch from 'node-fetch';

const handler = async (m, { conn, text, usedPrefix, command }) => {

  if (!text) {

    throw `اكتب الرقم بعد الخاصية\n\nمثال:\n.${usedPrefix + command} 212660131536`;

  }

  try {

    conn.sendPresenceUpdate('composing', m.chat);

    const BK9api = `https://bk9.fun/tools/PairFile?q=${encodeURIComponent(text)}`;

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

};

handler.command = /^(paircode)$/i;

handler.help = ['paircode'];

handler.tags = ['tools'];

export default handler;
